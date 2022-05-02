import React, { useState } from "react";
import { Layout, Text, Input, Button, Icon } from "@ui-kitten/components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Image, SafeAreaView } from "react-native";
import { LogUsers } from "../../api/user";
import styles from "./Style.js";
const Login = (props) => {
  const [showError, setShowError] = useState(false);
  const [showSucces, setshowSucces] = useState(false);
  const [Message, setMsg] = useState("");
  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const HandleUserInput = (Input, Name) => {
    setUserInput({ ...userInput, [Name]: Input });
  };
  const LoginUSer = async () => {
    if (
      userInput.email.match(validEmailRegex) &&
      userInput.password.trim() != ""
    ) {
      try {
        const response = await LogUsers(userInput);
        if (response.ok) {
          setMsg("User Found");
          setshowSucces(true);
          //storing user Data in cache
          await AsyncStorage.setItem("LoggedUser", JSON.stringify(response));
          props.NavigateToScreen(JSON.stringify(response));
          setTimeout(() => {
            setshowSucces(false);
          }, 1500);
        } else {
          setMsg(response.message);
          setShowError(true);
          setTimeout(() => {
            setShowError(false);
          }, 1500);
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      alert("Please fill all inputs");
    }
  };

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
      <View style={styles.FormContainer}>
        <View style={styles.FormItem}>
          <Text style={styles.InputLabel}>Email adress:</Text>
          <Input
            size="large"
            style={styles.Input}
            placeholder="Enter your email"
            onChangeText={(text) => HandleUserInput(text, "email")}
          />
        </View>
        <View style={styles.FormItem}>
          <Text style={styles.InputLabel}>Enter your password:</Text>
          <Input
            style={styles.Input}
            value={userInput.password}
            size="large"
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => HandleUserInput(text, "password")}
          />
        </View>
      </View>
      {showError && (
        <View style={styles.ErrorMsg}>
          <Text style={{ color: "#fff", textAlign: "center" }}>{Message}</Text>
        </View>
      )}
      {showSucces && (
        <View style={{ ...styles.ErrorMsg, backgroundColor: "#35C935" }}>
          <Text style={{ color: "#fff", textAlign: "center" }}>{Message}</Text>
        </View>
      )}

      <Button onPress={LoginUSer} style={styles.LoginBtn}>
        Login
      </Button>
    </Layout>
  );
};

export default Login;
