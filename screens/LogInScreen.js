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
/*Fonction handlesubmitSignin envoie une requête au backend avec les infos du front
  Exectute la requete et renvoie la réponse au frontend */
const LogInScreen = (props) => {
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  const [userExists, setUserExists] = useState(false);

  const [listErrorsSignin, setErrorsSignin] = useState([]);

  var handleSubmitSignin = async () => {
    const data = await fetch("https://lafraiche.herokuapp.com/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `email=${email}&password=${password}`,
    });

    const body = await data.json();

    if (body.result == true) {
      props.addToken(body.token);
      setUserExists(true);
    } else {
      setErrorsSignin(body.error);
    }
  };

  if (userExists) {
    props.navigation.navigate("BottomNavigator", {
      screen: "Categories",
    });
  }

  var tabErrorsSignin = listErrorsSignin.map((error, i) => {
    return <Text>{error}</Text>;
  });

  return (
    <ImageBackground
      source={require("../assets/backgroundSignIn.png")}
      style={styles.container}
    >
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>Connexion</Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "#737373",
          marginTop: 25,
          marginBottom: 10,
        }}
      >
        Email
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
          fontSize={18}
          placeholder="email"
          style={styles.textInput}
          onChangeText={(val) => setEmail(val)}
        />
      </View>

      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "#737373",
          marginTop: 25,
          marginBottom: 10,
        }}
      >
        Mot de passe
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
          fontSize={18}
          secureTextEntry={true}
          placeholder="password"
          style={styles.textInputPassword}
          type="password"
          onChangeText={(val) => setPassword(val)}
        />
        <FontAwesome name="eye-slash" size={24} color="#979797" />
      </View>
      {tabErrorsSignin}
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
      <View>
        <Button
          title="Je me connecte"
          buttonStyle={styles.button}
          onPress={() => handleSubmitSignin()}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text
          onPress={() =>
            props.navigation.navigate("SignUp", { screen: "SignUp" })
          }
        >
          Pas de compte ?
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

export default connect(null, mapDispatchToProps)(LogInScreen);
