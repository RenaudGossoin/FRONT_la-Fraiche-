import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";
import { Card } from "react-native-elements";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import BandeVerteHaut from "./BandeVerteHaut";
import { MaterialIcons } from "@expo/vector-icons";
import RadialGradient from "react-native-radial-gradient";

import { connect } from "react-redux";

function CategoriesScreen(props) {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const findUser = async () => {
      if (props.saveToken) {
        const data = await fetch(
          `https://lafraiche.herokuapp.com/user-info?token=${props.saveToken}`
        );

        const body = await data.json();
        setUserInfo(
          body.detailUser.username.charAt(0).toUpperCase() +
            body.detailUser.username.slice(1)
        );
      }
    };

    findUser();
  }, []);

  var welcome;
  if (props.saveToken) {
    welcome = `Bienvenue, ${userInfo}`;
  } else {
    welcome = "Bienvenue sur La Fraîche";
  }

  const goTo = () =>
    props.navigation.navigate("Product", { screen: "ProductScreen" });
  const [categorie, setCategorie] = useState("");

  var handleOnPressFruits = () => {
    setCategorie("Fruits");
    props.onSubmitCategorie("Fruits");
    goTo();
  };

  var handleOnPressLegumes = () => {
    setCategorie("Legumes");
    props.onSubmitCategorie("Legumes");
    goTo();
  };

  var handleOnPressOeufs = () => {
    setCategorie("Oeufs");
    props.onSubmitCategorie("Oeufs");
    goTo();
  };
  var handleOnPressFromages = () => {
    setCategorie("Fromages");
    props.onSubmitCategorie("Fromages");
    goTo();
  };

  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }}>
      <View style={styles.TopBar}>
        <Image
          source={require("../assets/courge.png")}
          style={{
            position: "absolute",
            width: 160,
            resizeMode: "contain",
            top: -60,
            left: -40,
          }}
        />

        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#737373" }}>
          {welcome}
        </Text>
      </View>
      <View style={{ borderRadius: 15 }}>
        <Image
          source={require("../assets/imgCategorie.png")}
          style={styles.title}
        />

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 190,
          }}
        >
          <Pressable title="Fruits" onPress={handleOnPressFruits}>
            <Image
              source={require("../assets/categorieFruits.png")}
              style={styles.image}
              onPress={handleOnPressFruits}
            />
          </Pressable>
          <Pressable title="Légumes" onPress={handleOnPressLegumes}>
            <Image
              source={require("../assets/categorieLegumes.png")}
              style={styles.image}
            />
          </Pressable>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 190,
          }}
        >
          <Pressable title="Oeufs" onPress={handleOnPressOeufs}>
            <Image
              source={require("../assets/categorieOeufs.png")}
              style={styles.image}
            />
          </Pressable>
          <Pressable onPress={handleOnPressFromages}>
            <Image
              source={require("../assets/categorieFromages.png")}
              style={styles.image}
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  TopBar: {
    paddingHorizontal: 25,
    paddingBottom: 20,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#ffffff",
    height: 120,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  body: {
    backgroundColor: "#ffffff",
  },
  title: {
    marginTop: 20,
    marginHorizontal: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 125,
    maxWidth: "90%",
  },

  bigtitle: {
    color: "#53B175",
  },

  subtitle: {
    position: "absolute",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    color: "#ffffff",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  category: {
    paddingHorizontal: 0,
    justifyContent: "flex-end",
    width: 150,
    height: 190,
    borderRadius: 15,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  imgContainer: {
    width: 200,
  },
  image: {
    width: 170,
    resizeMode: "contain",
  },

  categoryname: {
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold",
  },

  categoryContainer: {
    flexDirection: "row",
    marginTop: 50,
    marginBottom: 20,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  categoryText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
    opacity: 0.5,
  },

  button: {
    backgroundColor: "#FFFFFF",
    opacity: 0,
    borderRadius: 10,
    paddingVertical: 80,
    paddingHorizontal: 65,
    position: "absolute",
  },
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitCategorie: function (categorie) {
      dispatch({ type: "saveCategorie", categorie });
    },
  };
}

function mapStateToProps(state) {
  return {
    saveToken: state.saveToken,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen);
