import React from "react-native";
import { useState, useEffect } from "react";
import Login from "./Login";
import SignUp from "./SigunUp";
import LoginSignup from "./LoginSignup";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const Auth = ({ NavigateToScreen }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="LoginSignup"
          component={(props) => (
            <LoginSignup {...props} NavigateToScreen={NavigateToScreen} />
          )}
        />
        <Stack.Screen
          name="Login"
          component={(props) => (
            <Login {...props} NavigateToScreen={NavigateToScreen} />
          )}
        />
        <Stack.Screen
          name="Signup"
          component={(props) => (
            <SignUp {...props} NavigateToScreen={NavigateToScreen} />
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Auth;
