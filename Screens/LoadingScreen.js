import * as eva from "@eva-design/eva";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Spinner } from "@ui-kitten/components";

const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Spinner size="giant" />
    </View>
  );
};

export default LoadingScreen;
