import React, { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Profile } from "../screens/Profile";
import { Home } from "../screens/Home";
import { SignUp } from "../screens/SignIn";
import { Login } from "../screens/Login";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../firebase/config";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Add } from "../screens/Add";

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  const [user, setUser] = useState();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUser(user);
    } else {
      setUser(null);
    }
  });

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          activeColor="#FFF"
          inactiveColor="grey"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              if (route.name === "Tareas") {
                iconName = "tasks";
                size = focused ? 21 : 19;
                color = focused ? "#FFF" : "#264653";
              } else if (route.name === "Perfil") {
                iconName = "user";
                size = focused ? 21 : 19;
                color = focused ? "#FFF" : "#264653";
              } else if (route.name === "Agregar") {
                iconName = "plus";
                size = focused ? 21 : 19;
                color = focused ? "#FFF" : "#264653";
              } else if (route.name === "Login") {
                iconName = "sign-in-alt";
                size = focused ? 25 : 20;
                color = focused ? "#FFF" : "#264653";
              } else if (route.name === "SignUp") {
                iconName = "user-plus";
                size = focused ? 21 : 18;
                color = focused ? "#FFF" : "#264653";
              }
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
            headerRight: () =>
              user && (
                <TouchableOpacity
                  style={styles.logOut}
                  onPress={() => handleSignOut()}
                >
                  <FontAwesome5
                    name="door-open"
                    size={21}
                    color={"#FFF"}
                  ></FontAwesome5>
                </TouchableOpacity>
              ),
            tabBarInactiveTintColor: "#264653",
            tabBarActiveTintColor: "#FFF",
            tabBarStyle: styles.tabBar,
            headerStyle: styles.header,
            headerTintColor: "#FFF",
          })}
        >
          {user ? (
            <>
              <Tab.Screen name="Tareas" component={Home} />
              <Tab.Screen name="Agregar" component={Add} />
              <Tab.Screen name="Perfil" component={Profile} />
            </>
          ) : (
            <>
              <Tab.Screen name="Login" component={Login} />
              <Tab.Screen name="SignUp" component={SignUp} />
            </>
          )}
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  logOut: {
    marginRight: 20,
  },
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: "#2a9d8f",
  },
  header: {
    backgroundColor: "#2a9d8f",
  },
});
