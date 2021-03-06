import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { connect } from "react-redux";

const SignUpScreen = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [departement, setDepartement] = useState("");
  const [email, setEmail] = useState("");

  const [userExists, setUserExists] = useState(false);

  const [listErrorsSignup, setErrorsSignup] = useState([]);

  /*Fonction gandlesubmitSignup envoie une requête au backend avec les infos du front
  Exectute la requete et renvoie la réponse au frontend */
  var handleSubmitSignup = async () => {
    const data = await fetch("https://lafraiche.herokuapp.com/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `username=${username}&email=${email}&password=${password}&departement=${departement}`,
    });

    const body = await data.json();

    if (body.result == true) {
      setUserExists(true);
      props.addToken(body.token);
    } else {
      setErrorsSignup(body.error);
    }
  };

  if (userExists) {
    props.navigation.navigate("BottomNavigator", { screen: "Categories" });
  }

  var tabErrorsSignup = listErrorsSignup.map((error, i) => {
    return <Text>{error}</Text>;
  });

  return (
    <ImageBackground
      source={require("../assets/backgroundSignIn.png")}
      style={styles.container}
    >
      <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 20 }}>
        Inscription
      </Text>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#737373",
          marginTop: 15,
          marginBottom: 5,
        }}
      >
        nom d'utilisateur
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          borderColor: "#979797",
          borderBottomWidth: 1,
        }}
      >
        <TextInput
          placeholder="nom d'utilisateur"
          style={styles.textInput}
          onChangeText={(value) => setUsername(value)}
        />
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#737373",
          marginTop: 15,
          marginBottom: 5,
        }}
      >
        email
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          borderColor: "#979797",
          borderBottomWidth: 1,
        }}
      >
        <TextInput
          placeholder="email"
          style={styles.textInput}
          onChangeText={(val) => setEmail(val)}
        />
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#737373",
          marginTop: 15,
          marginBottom: 5,
        }}
      >
        département
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          borderColor: "#979797",
          borderBottomWidth: 1,
        }}
      >
        <TextInput
          placeholder="departement"
          style={styles.textInput}
          onChangeText={(val) => setDepartement(val)}
        />
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#737373",
          marginTop: 15,
          marginBottom: 5,
        }}
      >
        mot de passe
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          borderColor: "#979797",
          borderBottomWidth: 1,
        }}
      >
        <TextInput
          secureTextEntry={true}
          placeholder="password"
          style={styles.textInputPassword}
          type="password"
          onChangeText={(val) => setPassword(val)}
        />
        <FontAwesome name="eye-slash" size={24} color="#979797" />
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            color: "#737373",
            marginTop: 10,
          }}
        >
          Mot de passe oublié
        </Text>
      </View>
      {tabErrorsSignup}
      <View>
        <Button
          title="Je me connecte"
          buttonStyle={styles.button}
          onPress={() => handleSubmitSignup()}
        />
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text
          onPress={() =>
            props.navigation.navigate("SignIn", { screen: "SignIn" })
          }
        >
          Déja un compte ?
        </Text>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  textInput: {
    flex: 1,

    paddingBottom: 5,
    opacity: 0.5,
  },
  textInputPassword: {
    flex: 1,
    //borderColor:'#737373',
    paddingBottom: 5,
    opacity: 0.5,
  },
  button: {
    height: 45,
    //width:100,
    backgroundColor: "#006D24",
    borderRadius: 30,
    marginTop: 20,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    addToken: function (token) {
      dispatch({ type: "addToken", token: token });
    },
  };
}

export default connect(null, mapDispatchToProps)(SignUpScreen);
