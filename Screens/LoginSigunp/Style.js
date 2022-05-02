import { StyleSheet, StatusBar } from "react-native";
module.exports = StyleSheet.create({

    // Comun styles
  Container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    padding: "2%",
    paddingLeft: "4%",
    paddingRight: "4%",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: "8%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },

  leftPart: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontSize: 24,
    color: "black",
  },

  logo: {
    width: 50,
    height: 50,
  },
  FormContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: "50%",
  },

  FormItem: {
    width: "85%",
    marginBottom: 30,
  },
  Input: {
    backgroundColor: "#fff",
    borderColor: "#C4C4C4",
  },
  InputLabel: {
    marginBottom: 5,
    fontSize: 17,
  },

  // Login Page style
  LoginBtn: {
    width: "80%",
    marginTop: "40%",
    backgroundColor: "#598BFF",
    borderRadius: 10,
   
  },
  ErrorMsg:{
    width:"85%",
    height:50,
    backgroundColor:"#B32C2C",
    borderRadius:5,
    position:"absolute",
    top:"65%",
    justifyContent:"center",
    alignItems:"center"
  },
  // Signup page style
  SigunpBtn: {
    width: "80%",
    backgroundColor: "#598BFF",
    borderRadius: 10,
    marginTop: "15%",
  },
  SigunpFormContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: "20%",
  },


  // Signup Or Login Page style
  ButtonsContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: "40%",
  },
  Button: {
    width: "80%",
    marginTop: "10%",
    backgroundColor: "#598BFF",
    borderRadius: 10,
    height: 50,
  },
  pageText: {
    width: "75%",
    fontSize: 20,
    marginTop: "30%",
    textAlign: "center",
  },
});
