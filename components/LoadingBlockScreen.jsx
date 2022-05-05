import React from "react";
import { Spinner } from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";

const LoadingBlockScreen = () => {
  return (
    <View style={styles.block}>
      <Spinner size="giant" />
    </View>
  );
};

export default LoadingBlockScreen;
const styles = StyleSheet.create({
  block: {
    position: "absolute",
    backgroundColor: "#0000005E",
    flex: 1,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
