import React from "react";
import { Appbar } from "react-native-paper";

export const AppbarHeader = () => {
  const _goBack = () => console.log("Went back");

  const _handleMore = () => console.log("Shown more");

  return (
    <Appbar.Header style={{ backgroundColor: "#7B2CBF" }}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Task List" />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};
