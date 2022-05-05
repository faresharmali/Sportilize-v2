import React from "react-native";
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
        <Stack.Screen name="LoginSignup">
          {(props) => (
            <LoginSignup {...props} NavigateToScreen={NavigateToScreen} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Login">
          {(props) => <Login {...props} NavigateToScreen={NavigateToScreen} />}
        </Stack.Screen>
        <Stack.Screen name="Signup">
          {(props) => <SignUp {...props} NavigateToScreen={NavigateToScreen} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Auth;
