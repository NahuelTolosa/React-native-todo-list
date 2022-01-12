import * as ImagePicker from "expo-image-picker";

import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

//import * as Permissions from 'expo-pemissions'

const GalleryPicker = (props) => {
  const [pickedUri, setPickedUri] = useState();
  const [aux, setAux] = useState(true);

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status != "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita permisos de la cámara para usar la aplicación",
        [{ text: "Ok" }]
      );
      return false;
    }

    return true;
  };

  const handleTakeImage = async () => {
    const isCamaraOk = await verifyPermissions();
    if (!isCamaraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    setPickedUri(image.uri);
    props.setImage(image.uri);
    setAux(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!aux ? (
          <Text>No hay imagen seleccionada</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUri }} />
        )}
      </View>
      <Button title="Edit Photo" onPress={handleTakeImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: "94%",
    alignSelf: "center",
    alignItems: "center",
  },
  preview: {
    width: 150,
    height: 150,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderColor: "#264653",
    borderWidth: 2,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GalleryPicker;
