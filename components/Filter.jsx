import React, { useState, useEffect } from "react";
import {
  Layout,
  Text,
  Input,
  Button,
  Modal,
  Card,
  Icon,
  Select,
  IndexPath,
  SelectItem,
  Datepicker,
} from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";

const DefaultNamePrompt = (props) => {
  return (
    <View style={styles.modalHeader}>
      <Text category="h3">Filtering</Text>
      <Icon name="close-outline" fill="#000000" style={styles.closeIcon} />
    </View>
  );
};
const Filter = ({ ModalVisible, setModalVisible }) => {
  const data = ["All", "Running", "Football", "Basketball", "Bowling"];
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const displayValue = data[selectedIndex - 1];
  const [userInput, setUserInput] = useState({
    theme: "",
    startDate:"",
    endDate: "",
    endTime: "",
  });
  const HandleUserInput = (Input, Name) => {
    setUserInput({ ...userInput, [Name]: Input });
  };
  return (
    <Modal
      visible={ModalVisible}
      onBackdropPress={() => setModalVisible(false)}
      backdropStyle={styles.backdrop}
    >
      <Card disabled={true} header={DefaultNamePrompt}>
        <View style={styles.FormItem}>
          <Text style={styles.InputLabel}>Sport:</Text>
          <Select
            style={{ width: "100%" }}
            value={displayValue}
            selectedIndex={selectedIndex}
          >
            {data.map((d) => (
              <SelectItem key={d} title={d} />
            ))}
          </Select>
        </View>
        <View style={styles.DateTimeContainer}>
          <Text style={{ width: 50 }}>Start : </Text>
          <Datepicker
            date={userInput.startDate}
            onSelect={(nextDate) =>
              setUserInput({ ...userInput, startDate: nextDate })
            }
          />
          <Icon style={styles.icon} fill="#000" name="calendar-outline" />

          <Input style={styles.TimeInput} />
          <Text> : </Text>

          <Input style={styles.TimeInput} />
        </View>
        <View style={styles.DateTimeContainer}>
          <Text style={{ width: 50 }}>End : </Text>
          <Datepicker
            date={userInput.endDate}
            onSelect={(nextDate) =>
              setUserInput({ ...userInput, endDate: nextDate })
            }
          />
          <Icon style={styles.icon} fill="#000" name="calendar-outline" />

          <Input style={styles.TimeInput} />
          <Text> : </Text>
          <Input style={styles.TimeInput} />
        </View>
        <Button style={[styles.modalButton, styles.modalConfirmButton]}>
          Filter
        </Button>
      </Card>
    </Modal>
  );
};

export default Filter;
const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
  },
  map: {
    width: "100%",
    height: "85%",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  closeIcon: {
    height: 32,
    width: 32,
    margin: 10,
  },
  modalHeader: {
    padding: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    marginTop: 10,
  },
  modalConfirmButton: {
    backgroundColor: "#00E096",
    borderColor: "#FFFFFF",
  },
  modalDisabledbutton: {
    backgroundColor: "#C5CEE0",
  },
  EventImage: {
    height: 100,
    width: 100,
    borderRadius: 80,
  },
  EventTitle: {
    fontSize: 20,
    marginTop: 5,
  },
  FormContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  FormItem: {
    width: "85%",
    marginBottom: 5,
  },
  Input: {
    backgroundColor: "#fff",
    borderColor: "#C4C4C4",
  },
  TimeInput: {
    backgroundColor: "#fff",
    borderColor: "#C4C4C4",
    width: 51,
    padding: 0,
  },
  InputLabel: {
    marginBottom: 5,
    fontSize: 15,
  },
  DateTimeContainer: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  Btn: {
    backgroundColor: "#00E096",
    borderColor: "#00E096",
    width: "60%",
    marginTop: 10,
  },
  icon: {
    width: 32,
    marginLeft: 5,
    marginRight: 5,
    height: 32,
  },
});
