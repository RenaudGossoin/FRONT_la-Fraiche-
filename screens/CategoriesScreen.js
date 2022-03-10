import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  SafeAreaView,
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
  //console.log("console", props.saveToken);
  useEffect(() => {
    //console.log("ouverture UseEffect Product", props.saveCategorie);

    const findUser = async () => {
      //console.log(props.saveCategorie);
      if (props.saveToken) {
        const data = await fetch(
          `https://lafraiche.herokuapp.com/user-info?token=${props.saveToken}`
        );

        const body = await data.json();
        //console.log("bodycat", body);
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
    welcome = `Bienvenue ${userInfo}`;
  } else {
    welcome = "Bienvenue sur La Fraîche";
  }

  // setUserInfo(body.articlesFilter);
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

  // useEffect(() => {
  //      props.onSubmitCategorie(categorie);
  //      console.log('console.log du UseEffet',categorie)
  //  }, [categorie]);

  return (
    <>
      {/* //HEADER vert */}
      <View>
        <SafeAreaView
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            height: "16%",
            backgroundColor: "#53B175",
            paddingBottom: 15,
            paddingTop: 40,
            paddingHorizontal: 30,
          }}
        >
          <View
            style={{
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              {welcome}
            </Text>
          </View>
        </SafeAreaView>
        {/* //fin HEADER vert */}

        <ScrollView>
          <View style={styles.title}>
            <Text style={styles.subtitle}>Catégories</Text>
          </View>

          <View style={styles.container}>
            <Card name="Fruits" containerStyle={styles.category}>
              <Card.Image
                style={styles.imageup}
                source={require("../assets/cat-fruits.png")}
              />
              <Text style={styles.categoryname}>Fruits</Text>

              <Pressable
                style={styles.button}
                title="Fruits"
                onPress={handleOnPressFruits}
              />
            </Card>

            <Card name="Légumes" containerStyle={styles.category}>
              <Card.Image
                style={styles.imageup}
                source={require("../assets/cat-légumes.png")}
              />
              <Text style={styles.categoryname}>Légumes</Text>

              <Pressable style={styles.button} onPress={handleOnPressLegumes} />
            </Card>

            <Card containerStyle={styles.category}>
              <Card.Image
                name="Oeufs"
                style={styles.imagedown}
                source={require("../assets/cat-panier-oeufs.png")}
              />
              <Text style={styles.categoryname}>Oeufs</Text>
              <Pressable style={styles.button} onPress={handleOnPressOeufs} />
            </Card>

            <Card containerStyle={styles.category}>
              <Card.Image
                name="laitage"
                style={styles.imagedown}
                source={require("../assets/cat-laitage.png")}
              />
              <Text style={styles.categoryname}>Laitages</Text>
              <Pressable
                style={styles.button}
                onPress={handleOnPressFromages}
              />
            </Card>
          </View>
        </ScrollView>
      </View>
    </>
  );

  /* return(
      <BandeVerteHaut/>
    )*/
}

const styles = StyleSheet.create({
  bandeVerte: {
    backgroundColor: "#53B175",
    height: "17%",
  },
  body: {
    backgroundColor: "#ffffff",
  },
  title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    //marginTop: 20,
  },

  bigtitle: {
    // fontFamily: "Rochester",
    color: "#53B175",
  },

  subtitle: {
    // fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  category: {
    justifyContent: "center",
    width: 150,
    height: 190,
    borderRadius: 18,
    backgroundColor: "#53B175",
    borderStyle: "solid",
    borderColor: "#5375752B",
    position: "relative",

    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  imageup: {
    //width: 130,
    height: 80,
    marginBottom: 10,
    marginTop: 30,
    resizeMode: "contain",
  },
  imagedown: {
    width: 130,
    height: 130,
    marginBottom: 10,
    resizeMode: "contain",
  },
  categoryname: {
    textAlign: "center",
    color: "#ffffff",
    // fontFamily: 'Montserrat',
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
