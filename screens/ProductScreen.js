import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { Card } from "react-native-elements";

import { Ionicons } from "@expo/vector-icons";

import { connect } from "react-redux";

/*A l'initialisation du composn-ant, on affiche les pdouits en fonction de la categorie et du departement
si le token existe, on envoie une requete au back end pour recuperer le departement, on lit la categorie depuis le store et on affiche la liste des produits
sinon on envoie une requete au backend avec le numero du departement et la categorie lus depuis le store et on affiche la liste de produits */
function ProductScreen(props) {
  const [articleList, setArticleList] = useState([]);
  const [userInfo, setUserInfo] = useState();

  const goBack = () =>
    props.navigation.navigate("BottomNavigator", { screen: "Categories" });

  useEffect(() => {
    const findArticles = async () => {
      if (props.saveToken) {
        const data = await fetch(
          `https://lafraiche.herokuapp.com/articles?token=${props.saveToken}&categorie=${props.saveCategorie}`
        );

        const body = await data.json();

        setUserInfo(
          body.user.username.charAt(0).toUpperCase() +
            body.user.username.slice(1)
        );
        setArticleList(body.articlesFilter);
      } else {
        const data = await fetch(
          `https://lafraiche.herokuapp.com/articles?departement=${props.saveDepartement}&categorie=${props.saveCategorie}`
        );
        const body = await data.json();
        setArticleList(body.articlesFilter);
      }
    };

    findArticles();
  }, [props.saveToken]);

  var welcome;
  if (props.saveToken) {
    welcome = `Bienvenue ${userInfo}`;
  } else {
    welcome = "Bienvenue sur La Fraîche";
  }

  var imgCategorie;
  if (props.saveCategorie == "Fruits") {
    imgCategorie = (
      <Image source={require("../assets/NosFruits.png")} style={styles.title} />
    );
  } else if (props.saveCategorie == "Legumes") {
    imgCategorie = (
      <Image
        source={require("../assets/NosLégumes.png")}
        style={styles.title}
      />
    );
  } else if (props.saveCategorie == "Oeufs") {
    imgCategorie = (
      <Image source={require("../assets/NosOeufs.png")} style={styles.title} />
    );
  } else if (props.saveCategorie == "Fromages") {
    imgCategorie = (
      <Image
        source={require("../assets/NosFromages.png")}
        style={styles.title}
      />
    );
  } else {
    {
      <Text>N'oubliez pas de choisir une catégorie.</Text>;
    }
  }

  ///////////////////MAP ARTICLELIST//////////////////////
  //permet de lister les produits qu'on a setté dans le useeffect
  //lorsqu'on appuie sur le bouton détail, on enregistre le produit concerné dans le store pour pouvoir le lire dans détail screen
  const ArticlesArray = articleList.map((element, _id) => {
    return (
      <Card key={element._id} containerStyle={styles.item}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: -8,
          }}
        ></View>
        <View style={{ alignItems: "center" }}>
          <Card.Image style={styles.image} source={{ uri: element.img }} />
        </View>
        <View style={styles.textcontainer}>
          <View>
            <Text style={styles.productandprice}>{element.nom}</Text>
          </View>
        </View>
        <Text style={styles.productquantity}>{element.mesurement}</Text>
        <Text style={styles.productandprice}>{element.prix} €</Text>
        <View style={{ justifyContent: "flex-end" }}>
          <Pressable
            onPress={() => {
              props.onShowArticle(element),
                props.navigation.navigate("Detail", {
                  screen: "DetailScreen",
                });
            }}
            style={styles.button}
          >
            <Text style={styles.textbutton}>détails</Text>
          </Pressable>
        </View>
      </Card>
    );
  });

  return (
    <View style={{ backgroundColor: "#ffffff", marginBottom: 70 }}>
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
          onPress={goBack}
        />
        <Ionicons
          name="chevron-back-circle-outline"
          size={30}
          color="#006D24"
          onPress={goBack}
        />

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            color: "#737373",
            marginBottom: 6,
          }}
        >
          {welcome}
        </Text>
      </View>

      <ScrollView style={styles.body}>
        <View style={{ marginTop: 0 }}>{imgCategorie}</View>
        <View style={styles.container}>{ArticlesArray}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  TopBar: {
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingBottom: 20,
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#FFFFFF",
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
    //marginTop:20,

    backgroundColor: "#ffffff",
  },

  title: {
    //position:'relative',
    //borderRadius:15,
    marginTop: 20,
    marginHorizontal: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 125,
    maxWidth: "90%",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: "10%",
  },

  item: {
    width: 108,
    height: 180,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderColor: "#5375752B",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.24,
    shadowRadius: 8.32,

    elevation: 16,

    marginRight: 6,
    marginLeft: 6,
    paddingHorizontal: 7,
    //paddingBottom: "2%",
  },

  /*icon: {
    marginLeft: "80%",
  },*/

  image: {
    width: 60,
    height: 60,
    marginBottom: 0,
    marginTop: 0,
    marginRight: "5%",
    marginLeft: "5%",
    resizeMode: "contain",
  },

  textcontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    resizeMode: "contain",

    marginTop: 5,
  },

  productandprice: {
    fontSize: 12,
    borderColor: "#000000",
    fontWeight: "bold",
  },

  productquantity: {
    fontSize: 10,
    color: "#7C7C7C",
    marginTop: 3,
  },

  button: {
    backgroundColor: "#006D24",
    opacity: 1,
    borderRadius: 17,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 7,
    marginTop: 15,
  },

  textbutton: {
    color: "#ffffff",
    width: 50,
    fontSize: 13,
    fontWeight: "bold",
    // textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
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
});

function mapDispatchToProps(dispatch) {
  return {
    onShowArticle: function (showarticle) {
      dispatch({ type: "showArticle", showarticle });
    },
    onAddToFavourite: function (element) {
      dispatch({ type: "onAddToFavourite", element });
    },
  };
}

function mapStateToProps(state) {
  return {
    saveDepartement: state.saveDepartement,
    saveToken: state.saveToken,
    saveCategorie: state.saveCategorie,
    saveDetailArticle: state.saveDetailArticle,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
