import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";

export const SignUp = () => {
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    username: "",
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: form.username
        })

        console.log(userCredential);
        setForm({
          username: "",
          name: "",
          surname: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up!</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        blurOnSubmit={true}
        textContentType="username"
        onChangeText={(text) => setForm({ ...form, username: text })}
        value={form.username}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        blurOnSubmit={true}
        textContentType="name"
        onChangeText={(text) => setForm({ ...form, name: text })}
        value={form.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Surname"
        blurOnSubmit={true}
        textContentType="surname"
        onChangeText={(text) => setForm({ ...form, surname: text })}
        value={form.surname}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        blurOnSubmit={true}
        textContentType="emailAddress"
        onChangeText={(text) => setForm({ ...form, email: text })}
        value={form.email}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setForm({ ...form, password: text })}
        value={form.password}
      />

      {error !== "" && <Text>{error}</Text>}

      <Button title="REGISTER" color="#edf2fb" style={{width: '50%'}} onPress={() => handleSignUp()} />
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

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
    textAlign: "center",
    justifyContent: "center",
    marginVertical: 8,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#2a9d8f",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
});
