import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";

import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

function FavouriteScreen(props) {
  var noArticles;
  if (props.addtoFavlist.length == 0) {
    noArticles = "No Favorite Articles";
  }

  const goBack = () =>
    props.navigation.navigate("BottomNavigator", { screen: "Categories" });

  var noArticles;
  if (props.addtoFavlist.length == 0) {
    noArticles = "votre liste de favoris est vide";
  } else if (props.addtoFavlist.length == 1) {
    noArticles =
      props.addtoFavlist.length + " article dans votre liste de favoris";
  } else {
    noArticles =
      props.addtoFavlist.length + " articles dans votre liste de favoris";
  }

  const favArray = props.addtoFavlist.map((item, _id) => {
    return (
      <View key={item._id} style={styles.container}>
        {/* //////////BasketScreen//////////// */}

        <View
          style={{
            flex: 1,
            alignItems: "center",
            borderRightWidth: 2,
            borderColor: "#ffffff",
          }}
        >
          <Image
            style={{
              resizeMode: "contain",
              height: 50,
              width: 100,
              color: "gray",
            }}
            source={{ uri: item.img }}
          />
        </View>
        <View style={styles.block}>
          <Text
            style={{ fontWeight: "bold", paddingBottom: 1, paddingLeft: 0 }}
          >
            {item.nom}
          </Text>
          <Text style={styles.element}>
            {/* {" "} */}
            {item.mesurement}
            {/* {parseInt(item.prix)} €  */}
          </Text>
          <Pressable
            style={styles.detailsButton}
            onPress={() => {
              props.onShowArticle(item),
                props.navigation.navigate("Detail", {
                  screen: "DetailScreen",
                });
            }}
          >
            <Text style={styles.textdetailButton}>détails</Text>
          </Pressable>
          <View style={styles.blockbutton}></View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Ionicons
            name="md-close-circle-outline"
            size={32}
            color="#006D24"
            style={{ paddingLeft: 15, alignItems: "flex-end" }}
            onPress={() => props.onDeleteFavArticle(item)}
          />

          <Text style={{ paddingTop: 10, fontWeight: "bold" }}>
            {item.prix} €
          </Text>
        </View>
        {/* //////////////////////Origin FavouriteScreen////////////////// */}
      </View>
    );
  });

  ////////////////Début du style///////////////////////
  return (
    <View style={{ /*flex: 1,*/ backgroundColor: "#ffffff", marginBottom: 70 }}>
      <View style={styles.TopBar}>
        <Ionicons
          name="chevron-back-circle-outline"
          size={30}
          color="#006D24"
          onPress={goBack}
        />

        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#737373" }}>
          Mes favoris
        </Text>
      </View>
      <ScrollView style={styles.body}>
        <Text
          style={{
            marginTop: 20,
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          {noArticles}
        </Text>

        {favArray}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#ffffff",
  },
  TopBar: {
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingBottom: 20,
    //flexDirection:"column",
    justifyContent: "space-between",
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

  block: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 20,
  },

  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#fff",
  },

  title: {
    marginTop: 60,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,

    marginBottom: 20,
  },

  title: {
    marginTop: 60,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,

    marginBottom: 20,
  },

  imgProduct: {
    width: 55,
    height: 55,

    marginLeft: 15,
    marginRight: 15,
    marginTop: 30,
  },

  productTitle: {
    fontWeight: "bold",
    fontSize: 14,

    paddingTop: 5,
    marginBottom: 10,
  },

  productInfos: {
    fontSize: 12,
    color: "#7C7C7C",
  },

  productPrice: {
    paddingTop: 5,
    marginBottom: 3,
    marginLeft: 65,

    fontSize: 14,
    fontWeight: "bold",
    width: 45,
  },

  displayRow: {
    display: "flex",
    flexDirection: "row",
  },

  displayColumn2: {
    display: "flex",
    flexDirection: "column",

    marginTop: 30,
    width: 150,
  },

  displayColumn3: {
    display: "flex",
    flexDirection: "column",

    marginTop: 30,
    backgroundColor: "#ffffff",
    width: 50,
  },

  detailsButton: {
    backgroundColor: "#53B175",
    opacity: 1,
    width: 85,
    borderRadius: 17,
    paddingTop: 2,
    paddingBottom: 2,
    marginTop: 5,
    //marginLeft : 50,
  },
  imgTrash: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginLeft: 0,
  },

  textdetailButton: {
    marginLeft: "auto",
    marginRight: "auto",
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

function mapDispatchToProps(dispatch) {
  return {
    onDeleteFavArticle: function (article) {
      dispatch({ type: "deleteArticleFavori", article });
    },
    onShowArticle: function (showarticle) {
      dispatch({ type: "showArticle", showarticle });
    },
  };
}

function mapStateToProps(state) {
  return {
    saveToken: state.saveToken,
    addtoFavlist: state.addtoFavlist,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteScreen);
