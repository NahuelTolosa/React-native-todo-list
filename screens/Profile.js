import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  Image
} from "react-native";
import { onAuthStateChanged, getAuth, updateProfile, updateEmail } from "firebase/auth";


export const Profile = ({navigation}) => {

  const [text, setText] = useState({
    username: "",
    // name: "",
    // surname: "",
    email: "",
  });
  const [user, setUser] = useState();

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUser(user.displayName);
    } else {
      setUser(null);
    }
  });

  const updateUser = ( ) => {
    const auth = getAuth();

    if (text.username !== '') {
      updateProfile(auth.currentUser, {
        displayName: text.username
      }).then(() => {
        
      }).catch((error) => {
        alert('No fue posible actualizar los datos :(');
      });
    }

    if(text.email !== ''){
      updateEmail(auth.currentUser, text.email).then(() => {

      }).catch((error) => {

      });
    }

    setText({
      username: "",
      // name: "",
      // surname: "",
      email: ""
    })
    
    alert('Datos actualizados correctamente!');

    navigation.navigate('Tareas');
  }

  return (
    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView style={styles.imgWrapper}>

        <Image style={styles.image} source={{uri: 'https://picsum.photos/300/300'}}/>

        {
          user == null || user == undefined 
            ? <Text style={styles.profileName}>User</Text>
            : <Text style={styles.profileName}>{user}</Text>
        }
        
      </KeyboardAvoidingView>

      <ScrollView>

        <TextInput
          style={styles.input}
          placeholder="Nombre de Ususario . . ."
          onChangeText={(usernameField) =>
            setText({ ...text, username: usernameField })
          }
          keyboardType="text"
        />

        {/* <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(nameField) => setText({ ...text, name: nameField })}
          keyboardType="text"
        />

        <TextInput
          style={styles.input}
          placeholder="Surname"
          onChangeText={(surnameField) =>
            setText({ ...text, surname: surnameField })
          }
          keyboardType="text"
        /> */}

        <TextInput
          style={styles.input}
          placeholder="Email . . ."
          onChangeText={(emailField) => setText({ ...text, email: emailField })}
          keyboardType="text"
        />

        <View>
          <View style={styles.buttonsOpcs}>
            <Button
              title="Cancelar"
              color="red"
              onPress={() => alert("Cancelado")}
            />
            <Button
              title="Guardar Cambios"
              color="green"
              onPress={() => updateUser()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  imgWrapper: {
    flexDirection: "column",
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  image: {
    width: 150,
    height: 150,
    backgroundColor: "#FFF",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#264653",
    borderWidth: 2,
  },

  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#264653",
    marginTop: 10,
  },

  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  buttonsOpcs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
});
