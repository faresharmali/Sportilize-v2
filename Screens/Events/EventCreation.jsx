import React, { useState, useEffect } from "react";
import { Layout, Text, Input, Icon, Button } from "@ui-kitten/components";
import {
  View,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import styles from "./Style.js";
import {
  IndexPath,
  Select,
  SelectItem,
  Datepicker,
} from "@ui-kitten/components";
import Footer from "../../components/Footer";
import Header from "../Header/Header";
import { CreateAnEvent } from "../../api/Event.js";
const CreateEvent = ({ navigation }) => {
  // to check if a properety is not defined
  const checkProperties = (obj) => {
    let arr = [];
    for (let key in obj) {
      arr.push(obj[key] !== undefined && obj[key] !== null && obj[key] !== "");
    }
    return arr.includes(false);
  };

  const [userInput, setUserInput] = useState({
    EventName: "",
    sports: "",
    startDate: "",
    StartHour: "",
    StartMinute: "",
    endDate: "",
    EndHour: "",
    EndMinute: "",
    participantsNumber: "",
    description: "",
  });

  const HandleUserInput = (Input, Name) => {
    setUserInput({ ...userInput, [Name]: Input });
  };
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const data = ["Running", "Football", "Basketball", "Bowling"];
  const SelectedSport = data[selectedIndex - 1];
  useEffect(() => {
    setUserInput({ ...userInput, sports: data[selectedIndex - 1] });
  }, [selectedIndex]);

  const createEvent = async () => {
    if (!checkProperties(userInput)) {
      try {
        const response = await CreateAnEvent(userInput);
        if (response.ok) {
          // navigate to next page
        } else {
          alert("Something went wrong");
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      alert("Please fill all inputs");
    }
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.Container}>
          <Image
            style={styles.EventImage}
            source={require("../../assets/img.jpg")}
          />
          <Text style={styles.EventTitle}>Stade lambda</Text>
          <View style={styles.FormContainer}>
            <View style={styles.FormItem}>
              <Text style={styles.InputLabel}>Event name:</Text>
              <Input
                style={styles.Input}
                placeholder="Event name"
                onChangeText={(text) => HandleUserInput(text, "EventName")}
              />
            </View>
            <View style={styles.FormItem}>
              <Text style={styles.InputLabel}>Sport:</Text>
              <Select
                value={SelectedSport}
                selectedIndex={selectedIndex}
                onSelect={(index) => setSelectedIndex(index)}
              >
                {data.map((d) => (
                  <SelectItem key={d} title={d} />
                ))}
              </Select>
            </View>
            <Text style={{ width: "85%" }}>Start : </Text>

            <View style={styles.DateTimeContainer}>
              <Datepicker
                style={{ maxWidth: "100%" }}
                date={userInput.startDate}
                onSelect={(nextDate) => HandleUserInput(nextDate, "startDate")}
              />
              <Icon style={styles.icon} fill="#000" name="calendar-outline" />

              <Input
                style={styles.TimeInput}
                onChangeText={(text) => HandleUserInput(text, "StartHour")}
              />
              <Text> : </Text>

              <Input
                style={styles.TimeInput}
                onChangeText={(text) => HandleUserInput(text, "StartMinute")}
              />
            </View>
            <Text style={{ width: "85%" }}>End : </Text>
            <View style={styles.DateTimeContainer}>
              <Datepicker
                date={userInput.endDate}
                onSelect={(nextDate) => HandleUserInput(nextDate, "endDate")}
              />
              <Icon style={styles.icon} fill="#000" name="calendar-outline" />

              <Input
                style={styles.TimeInput}
                onChangeText={(text) => HandleUserInput(text, "EndHour")}
              />
              <Text> : </Text>
              <Input
                style={styles.TimeInput}
                onChangeText={(text) => HandleUserInput(text, "EndMinute")}
              />
            </View>
            <View style={styles.FormItem}>
              <Text style={styles.InputLabel}>Number of participants :</Text>
              <Input
                style={styles.Input}
                placeholder="Number of participants"
                onChangeText={(text) =>
                  HandleUserInput(text, "participantsNumber")
                }
              />
            </View>
            <View style={styles.FormItem}>
              <Text style={styles.InputLabel}>Description:</Text>
              <Input
                multiline={true}
                style={styles.Input}
                textStyle={{ minHeight: 64 }}
                placeholder="Description"
                onChangeText={(text) => HandleUserInput(text, "description")}
              />
            </View>
          </View>
          <Button onPress={createEvent} style={styles.Btn}>
            Confirm
          </Button>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.BackBtn}>
        <Icon style={styles.icon} fill="#000" name="arrow-back-outline" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default CreateEvent;
