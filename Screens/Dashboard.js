import React from "react-native";
import Map from "./Map/Map";
import CreateEvent from "./Events/EventCreation";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./Header/Header";
import Footer from "../components/Footer";

import { View } from "react-native";
const Stack = createStackNavigator();
const Dashboard = ({ NavigateToScreen, LoggedInUser }) => {
  // put all screens here as Stack.Screen
  return (
    <View style={{ flex: 1 }}>
      <Header NavigateToScreen={NavigateToScreen} LoggedInUser={LoggedInUser} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="CreateEvent" component={CreateEvent} />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </View>
  );
};

export default Dashboard;
