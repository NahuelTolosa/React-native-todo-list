import React, { useState } from "react";
import { Provider } from "react-redux";
import { StyleSheet, View } from "react-native";
import store from "./redux/store/store";
import { Navigation } from "./components/Navigation";

export default function App() {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
