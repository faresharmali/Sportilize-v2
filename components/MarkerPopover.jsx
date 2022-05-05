import React from "react";
import { Text, Button, Modal } from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";

const MarkerPopover = ({
  ModalVisible,
  setModalVisible,
  infrastructure,
  navigation,
}) => {
  return (
    <Modal
      visible={ModalVisible}
      onBackdropPress={() => setModalVisible(false)}
      backdropStyle={styles.backdrop}
    >
      <View style={styles.PopoverContainer}>
        <Text style={styles.infrastructureName}>{infrastructure.name}</Text>
        <Text style={styles.infrastructureAdress}>
          {infrastructure.address}
        </Text>
        {/* use the navigation prop to navigate to screens on button press */}
        <Button style={{ margin: 3 }}>View details</Button>
        <Button style={{ margin: 3 }}>View Events</Button>
      </View>
    </Modal>
  );
};

export default MarkerPopover;
const styles = StyleSheet.create({
  PopoverContainer: {
    width: 250,
    minHeight: 150,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
  },
  infrastructureAdress: {
    width: "100%",
    textAlign: "center",
    fontSize: 16,
    margin: 3,
  },
  infrastructureName: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    margin: 3,
    fontWeight: "700",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
