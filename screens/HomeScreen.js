import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { LogBox } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";

LogBox.ignoreAllLogs();

const HomeScreen = (props) => {
  const [departement, setDepartement] = useState("");

  return (
    <ImageBackground
      source={require("../assets/homeScreen_background.png")}
      style={styles.container}
    >
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.viewContainer}>
          <Image
            source={require("../assets/logo-navet-Alpha.png")}
            style={styles.logo}
          ></Image>
          <View style={styles.textInputBtn}>
            <View>
              <Text style={{ color: "#7C7C7C" }}>Département</Text>
              <TextInput
                placeholder="dept"
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(val) => setDepartement(val)}
              />
            </View>
            <Button
              title="Rechercher"
              buttonStyle={styles.button}
              onPress={() => {
                props.navigation.navigate("BottomNavigator", {
                  screen: "Categories",
                });
                props.onSubmitDepartement(departement);
              }}
            />
          </View>
          <View style={styles.links}>
            <Text
              onPress={() =>
                props.navigation.navigate("SignUp", { screen: "SignUp" })
              }
              style={{ marginTop: 0, marginBottom: 5 }}
            >
              Pas de compte ?
            </Text>
            <Text
              style={{ color: "#006D24" }}
              onPress={() =>
                props.navigation.navigate("SignIn", { screen: "SignIn" })
              }
            >
              Me connecter
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  viewContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    maxHeight: "80%",
  },
  textInputBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 25,
    width: 100,
    borderColor: "#737373",
    borderBottomWidth: 1,
    paddingBottom: 5,
    opacity: 0.5,
  },
  button: {
    height: 45,
    width: 110,
    backgroundColor: "#006D24",
    borderRadius: 30,
    marginLeft: 10,
  },
  links: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    flex: 1,
    width: 350,
    height: 350,
    minHeight: 100,
    resizeMode: "contain",
    // marginTop:70,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitDepartement: function (departement) {
      dispatch({ type: "saveDepartement", departement });
    },
  };
}
export default connect(null, mapDispatchToProps)(HomeScreen);
