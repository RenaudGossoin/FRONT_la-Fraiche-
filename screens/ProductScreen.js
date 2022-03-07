import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  SafeAreaView,
} from "react-native";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

import { connect } from "react-redux";

function ProductScreen(props) {
  const [departement, setDepartement] = useState("");
  const [articleList, setArticleList] = useState([]);
  const [userInfo, setUserInfo] = useState();

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
          <Icon style={styles.icon} name="favorite" size={18} />
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
              console.log("test product clique reussi");
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
      <SafeAreaView
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
                /*alignItems:"flex-start",*/ color: "white",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {welcome}
            </Text>
          </View>
        </View>
      </SafeAreaView>

      <ScrollView style={styles.body}>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.title}>Nos {props.saveCategorie} frais !</Text>
        </View>
        <View style={styles.container}>{ArticlesArray}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    //marginTop:20,

    backgroundColor: "#ffffff",
  },

  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    //marginTop: 46+123,
    marginBottom: 25,
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
    height: 200,
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
    backgroundColor: "#53B175",
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
  };
}

function mapStateToProps(state) {
  return {
    saveDepartement: state.saveDepartement,
    saveToken: state.saveToken,
    saveCategorie: state.saveCategorie,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
