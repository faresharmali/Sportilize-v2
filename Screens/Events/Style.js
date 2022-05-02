import { StyleSheet } from "react-native";
module.exports = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#fff",
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
    marginTop: 10,
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
    width: 60,
  },
  InputLabel: {
    marginBottom: 5,
    fontSize: 15,
  },
  DateTimeContainer: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
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
  BackBtn: {
    width: 40,
    height: 40,
    borderRadius: 30,
    left: 50,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
    position: "absolute",
    top: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
});
