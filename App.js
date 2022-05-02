import * as eva from "@eva-design/eva";
import React, { useState, useEffect } from "react";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import "react-native-gesture-handler";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import Auth from "./Screens/LoginSigunp";
import Dashboard from "./Screens/Dashboard";
import LoadingScreen from "./Screens/LoadingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [CurrentScreen, NavigateToScreen] = useState("Loading");
  const [LoggedInUser, setLoggedInUser] = useState("");

  useEffect(async () => {
    // check if a user is already logged in
    const LoggedUser = await AsyncStorage.getItem("LoggedUser");
    if (LoggedUser) {
      setLoggedInUser(LoggedUser);
      NavigateToScreen("Dashboard");
    } else {
      NavigateToScreen("Authentication");
    }
  }, []);
  const NavigateAfterLogin = async (User) => {
    setLoggedInUser(User);
    NavigateToScreen("Dashboard");
  };
  return (
    <>
      <ApplicationProvider {...eva} theme={eva.light}>
        <IconRegistry icons={EvaIconsPack} />
        {CurrentScreen == "Loading" && <LoadingScreen />}
        {CurrentScreen == "Authentication" && (
          <Auth NavigateToScreen={NavigateAfterLogin} />
        )}
        {CurrentScreen == "Dashboard" && (
          <Dashboard
            LoggedInUser={JSON.parse(LoggedInUser)}
            NavigateToScreen={NavigateToScreen}
          />
        )}
      </ApplicationProvider>
    </>
  );
};

export default App;
