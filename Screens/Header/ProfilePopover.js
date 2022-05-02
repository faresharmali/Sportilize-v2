import React from "react";
import { Text, StyleSheet } from "react-native";
import { Icon, Popover, Button, Layout } from "@ui-kitten/components";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfilePopover = (props) => {
  const Logout = async () => {
    alert("cameeed");
    await AsyncStorage.removeItem("LoggedUser");
    props.NavigateToScreen("Authentication");
  };
  return (
    <Popover {...props}>
      <Layout style={styles.content}>
        <Text style={styles.username}>{props.LoggedInUser.username}</Text>
        <Text style={styles.email}>{props.LoggedInUser.email}</Text>
        <Button
          style={styles.button}
          onPress={() => {
            console.log("bouton");
          }}
        >
          View profile
        </Button>
        <Button onPress={Logout} style={styles.button}>
          Disconnect
        </Button>
      </Layout>
    </Popover>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginRight: 15,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 6,
    marginLeft: 6,
  },
  email: {
    fontSize: 12,
    fontWeight: "200",
    marginBottom: 6,
    marginLeft: 6,
  },
  button: {
    width: "100%",
    margin: 6,
  },
});

export default ProfilePopover;
