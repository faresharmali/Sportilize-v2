import React, { useState } from "react";
import { Layout, Text, Input, Button } from "@ui-kitten/components";
import { View, Image, SafeAreaView } from "react-native";
import styles from "./Style.js";
import uuid from "react-native-uuid";
import { UserCreate } from "../../api/user.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUp = (props) => {
  const [showError, setShowError] = useState(false);
  const [Message, setMsg] = useState("");
  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [userInput, setUserInput] = useState({
    uuid: uuid.v4(),
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
    role: "member",
  });
  const HandleUserInput = (Input, Name) => {
    setUserInput({ ...userInput, [Name]: Input });
  };
  const CreateUser = async () => {
    if (
      userInput.email.match(validEmailRegex) &&
      userInput.password.trim() != "" &&
      userInput.confirmpassword.trim() != "" &&
      userInput.username.trim() != ""
    ) {
      if (userInput.password == userInput.confirmpassword) {
        let Data = { ...userInput };
        delete Data.confirmpassword;
        try {
          const response = await UserCreate(Data);
          if (response.ok) {
            await AsyncStorage.setItem("LoggedUser", JSON.stringify(response));
            props.NavigateToScreen(JSON.stringify(response));
          } else {
            setMsg(response.message);
            setShowError(true);
            setTimeout(() => {
              setShowError(false);
            }, 2000);
          }
        } catch (e) {
          console.log(e);
        }
      } else {
        alert("Passwords do not match");
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
      <View style={styles.SigunpFormContainer}>
        <View style={styles.FormItem}>
          <Text style={styles.InputLabel}>Username :</Text>
          <Input
            value={userInput.username}
            size="large"
            style={styles.Input}
            placeholder="Enter your username"
            onChangeText={(text) => HandleUserInput(text, "username")}
          />
        </View>
        <View style={styles.FormItem}>
          <Text style={styles.InputLabel}>Email adress:</Text>
          <Input
            value={userInput.email}
            size="large"
            style={styles.Input}
            placeholder="Enter your email"
            onChangeText={(text) => HandleUserInput(text, "email")}
          />
        </View>
        <View style={styles.FormItem}>
          <Text style={styles.InputLabel}>Password:</Text>
          <Input
            value={userInput.password}
            size="large"
            style={styles.Input}
            placeholder="Enter your password"
            onChangeText={(text) => HandleUserInput(text, "password")}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.FormItem}>
          <Text style={styles.InputLabel}>Confirm password:</Text>
          <Input
            value={userInput.confirmpassword}
            size="large"
            style={styles.Input}
            placeholder="Confirm your password"
            onChangeText={(text) => HandleUserInput(text, "confirmpassword")}
            secureTextEntry={true}
          />
        </View>
      </View>
      {showError && (
        <View style={{ ...styles.ErrorMsg, top: "72%" }}>
          <Text style={{ color: "#fff", textAlign: "center" }}>{Message}</Text>
        </View>
      )}

      <Button onPress={CreateUser} style={styles.SigunpBtn}>
        Sign up
      </Button>
    </Layout>
  );
};

export default SignUp;
