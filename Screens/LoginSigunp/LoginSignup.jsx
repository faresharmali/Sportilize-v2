import React, { useState } from "react";
import { Layout, Text, Input, Button } from "@ui-kitten/components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, StyleSheet, StatusBar, Image, SafeAreaView } from "react-native";
import styles from "./Style.js";

const LoginSignup = ({ navigation }) => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  return (
    <Layout style={styles.Container}>
      <SafeAreaView style={styles.header}>
        <View style={styles.leftPart}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.logoText}>Sportilize</Text>
        </View>
      </SafeAreaView>
      <Text style={styles.pageText}>
        In order to have full access to the application, please sign up or login
      </Text>
      <View style={styles.ButtonsContainer}>
        <Button
          onPress={() => navigation.navigate("Login")}
          style={styles.Button}
        >
          Login
        </Button>
        <Button
          onPress={() => navigation.navigate("Signup")}
          appearance="outline"
          style={{ ...styles.Button, backgroundColor: "#fff" }}
        >
          Sigu nup
        </Button>
      </View>
    </Layout>
  );
};

export default LoginSignup;
