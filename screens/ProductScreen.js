import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  SafeAreaView,
  Image,
} from "react-native";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { connect } from "react-redux";

function ProductScreen(props) {
  const [departement, setDepartement] = useState("");
  const [articleList, setArticleList] = useState([]);
  const [userInfo, setUserInfo] = useState();
  const [likeProduct, setLikeProduct] = useState(false);

  //console.log(articleList)

  const goBack = () =>
    props.navigation.navigate("BottomNavigator", { screen: "Categories" });

  useEffect(() => {
    //console.log("ouverture UseEffect Product", props.saveCategorie);

    const findArticles = async () => {
      //console.log(props.saveCategorie);
      if (props.saveToken) {
        const data = await fetch(
          `https://lafraiche.herokuapp.com/articles?token=${props.saveToken}&categorie=${props.saveCategorie}`
        );

        const body = await data.json();
        //console.log("bodyproduct",body);
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
    //console.log(departement+" from UseEffect")
  }, [props.saveToken]);

  //console.log("articleslist: ", articleList);

  var welcome;
  if (props.saveToken) {
    welcome = `Bienvenue ${userInfo}`;
  } else {
    welcome = "Bienvenue sur La Fraîche";
  }

  //console.log(props.saveCategorie)

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
  const ArticlesArray = articleList.map((element, _id) => {
    //console.log(element.img);

    return (
      <Card key={element._id} containerStyle={styles.item}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: -8,
          }}
        >
          {/* <Icon style={styles.icon} name="favorite" size={18} 
          onPress={() => {
            console.log("element de ProductScreen", element),
              props.onAddToFavourite(element);
              props.navigation.navigate("Favourite", { screen: "FavouriteScreen" });
            }}
          /> */}
        </View>
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
              //console.log("test product clique reussi");
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
    <View style={{ /*flex: 1,*/ backgroundColor: "#ffffff", marginBottom: 70 }}>
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
        {/* <MaterialIcons
              name="arrow-back-ios"
              size={24}
              color="#000000"
              onPress={goBack}
            /> */}
        {/* <Image source={require("../assets/courge.png")} style={{position:"absolute", width:160, resizeMode:"contain", top:-60, left:-40}}  onPress={goBack}/> */}

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
      {/* <SafeAreaView
        style={{
          display: "flex",
          height: 90,
          backgroundColor: "#53B175",
          paddingBottom: 0,
          paddingTop: 50,
          paddingHorizontal: 30,
        }}
      >
        
        <View
          style={
            {
              //flexDirection : "row",
              //alignItems: "flex-end",
              //justifyContent: "flex-end",
            }
          }
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <MaterialIcons
              name="arrow-back-ios"
              size={24}
              color="#000000"
              onPress={goBack}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {welcome}
            </Text>
          </View>
        </View>
      </SafeAreaView> */}

      <ScrollView style={styles.body}>
        <View style={{ marginTop: 0 }}>
          {imgCategorie}
          {/* <Text style={styles.title}>Nos {props.saveCategorie} frais !</Text> */}
        </View>
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
    //flexDirection:"column",
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
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 5,
    //   height: 5,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 5,
    // elevation: 10,

    //marginTop: 20,
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
