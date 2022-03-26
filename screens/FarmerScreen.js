import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-elements";

import { Ionicons } from "@expo/vector-icons";

import { connect } from "react-redux";

function DetailScreen(props) {
  const [showTextProductDetails, setShowTextProductDetails] = useState(false);
  const [showTextConseils, setShowTextConseils] = useState(false);

  const goBack = () =>
    props.navigation.navigate("Product", { screen: "ProductScreen" });

  return (
    <>
      <ScrollView style={styles.body}>
        <View style={styles.body}>
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
              Nos Fermier·e·s
            </Text>
          </View>
          <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
              <Image
                style={{ marginTop: -75, maxHeight: 500 }}
                source={require("../assets/FarmerResize.png")}
                resizeMode="contain"
              />
            </View>

            <View style={styles.mainproductinfolines}>
              <View style={styles.productandfavoriteline}>
                <View>
                  <Text style={styles.producttitle}>
                    Ferme de la vache bleue
                  </Text>
                </View>
              </View>

              <View>
                <View style={styles.marginTopshowhidemenu}>
                  <View style={styles.firstlineshowhidemenu}>
                    <Text style={styles.titleshowhidemenu}>
                      Qui sommes nous ?
                    </Text>

                    <TouchableOpacity
                      onPress={() =>
                        setShowTextProductDetails(!showTextProductDetails)
                      }
                    >
                      <Image
                        style={styles.imgFleche}
                        source={require("../assets/fleche-deroulante-bas.png")}
                      />
                    </TouchableOpacity>
                  </View>

                  {showTextProductDetails && (
                    <View>
                      <Text style={styles.textshowhidemenu}>
                        {props.saveDetailArticle.description}
                      </Text>
                    </View>
                  )}
                </View>

                <View style={styles.marginTopshowhidemenu}>
                  <View style={styles.firstlineshowhidemenu}>
                    <Text style={styles.titleshowhidemenu}>Nos produits</Text>
                  </View>
                  <Card.Image
                    style={styles.nutriscore}
                    source={{ uri: props.saveDetailArticle.nutriscore }}
                    resizeMode="contain"
                  />
                </View>

                <View style={styles.marginTopshowhidemenu}>
                  <View style={styles.firstlineshowhidemenu}>
                    <Text style={styles.titleshowhidemenu}>Conseils</Text>

                    <TouchableOpacity
                      onPress={() => setShowTextConseils(!showTextConseils)}
                    >
                      <Image
                        style={styles.imgFleche}
                        source={require("../assets/fleche-deroulante-bas.png")}
                      />
                    </TouchableOpacity>
                  </View>

                  {showTextConseils && (
                    <View>
                      <Text style={styles.textshowhidemenu}>
                        {props.saveDetailArticle.astuce}
                      </Text>
                    </View>
                  )}
                </View>

                <Pressable
                  style={styles.buttonaddtobasket}
                  onPress={() => {
                    //console.log("click detailscreen"),
                    props.onAddToCart(props.saveDetailArticle);
                  }}

                  // onPress={goTo}
                >
                  <Text style={styles.textaddtobasketbutton}>
                    Ajouter au panier
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
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
    backgroundColor: "#ffffff",
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",

    marginTop: 30,
    padding: 30,
  },

  imgGoback: {
    width: 35,
    height: 20,
  },

  image: {
    alignItems: "center",
    justifyContent: "center",
    width: 329,
    height: 200,
    marginBottom: 0,
    marginRight: 13,
    marginLeft: 13,
    resizeMode: "contain",
  },

  mainproductinfolines: {
    display: "flex",
    flexDirection: "column",
  },

  productandfavoriteline: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  producttitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#006D24",
  },

  addquantityandpriceline: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  blockbutton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",

    marginTop: 20,
  },

  button: {
    borderColor: "#636e72",
    borderRadius: 7,
    paddingBottom: 2,
    paddingTop: 2,
  },
  quantity: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 17,
    paddingRight: 17,
    borderColor: "#E2E2E2",
    borderWidth: 1,
    borderRadius: 17,
  },

  price: {
    fontSize: 25,
    fontWeight: "bold",
    paddingTop: 0,
  },

  unit: {
    fontSize: 12,
    color: "#7C7C7C",
    textAlign: "left",
  },

  marginTopshowhidemenu: {
    marginTop: 20,
  },

  firstlineshowhidemenu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  imgFleche: {
    width: 20,
    height: 20,
    backgroundColor: "#ffffff",
  },

  titleshowhidemenu: {
    fontSize: 18,
    fontWeight: "bold",
  },

  textshowhidemenu: {
    fontSize: 13,
    color: "#7C7C7C",
    textAlign: "left",

    marginTop: 10,
    lineHeight: 20,
  },

  buttonaddtobasket: {
    backgroundColor: "#006D24",

    borderRadius: 40,
    height: 67,

    marginTop: 20,
    marginBottom: 30,
  },

  textaddtobasketbutton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  nutriscore: {
    width: 100,
    height: 70,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function (element) {
      dispatch({ type: "increase", element });
    },

    onDecreaseClick: function (element) {
      dispatch({ type: "decrease", element });
    },

    onAddToCart: function (articleBasket) {
      dispatch({ type: "addToCart", articleBasket });
    },

    addtoFavlist: function (articleFavorite) {
      dispatch({ type: "addtoFavlist", articleFavorite });
    },
    saveHeartColor: function (articleLiked) {
      dispatch({ type: "saveHeartColor", articleLiked });
    },
  };
}

function mapStateToProps(state) {
  return {
    saveCount: state.saveCount,
    saveDetailArticle: state.saveDetailArticle,
  };
}

// var addTofavlist = props.addTofavlist
// console.log('state de addtofavlist', addTofavlist)

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
