import React from "react-native";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "@ui-kitten/components";

const MarkerPopover = ({ element }) => {
  const navigation = useNavigation();
  // pass the navigation function to the button to navigate to the other screens
  return (
    <View style={styles.PopoverContainer}>
      <View>
        <Text>{element.nom}</Text>
        <Text>Adress here</Text>
        <Button onPress={() => {}} style={styles.btn}>
          More informations
        </Button>
        <Button onPress={() => alert("hello")} style={styles.btn}>
          View events
        </Button>
      </View>
    </View>
  );
};

export default MarkerPopover;
const styles = StyleSheet.create({
  PopoverContainer: {
    width: 200,
    minHeight: 140,
    alignItems: "center",
  },
  btn: {
    width: 180,
    marginTop: 5,
  },
});
