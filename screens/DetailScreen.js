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
import Icon from "react-native-vector-icons/MaterialIcons";
import { Ionicons } from "@expo/vector-icons";

import { connect } from "react-redux";

/*Affichage du produit selectionné à partir du store.
Utilisation d'un hook d'état pour liker le produit et enregistrement du produit liké dans le store */
function DetailScreen(props) {
  const [showTextProductDetails, setShowTextProductDetails] = useState(false);
  const [showTextConseils, setShowTextConseils] = useState(false);
  const [likeProduct, setLikeProduct] = useState(false);

  const goBack = () =>
    props.navigation.navigate("Product", { screen: "ProductScreen" });

  var handleFavoriteClick = () => {
    setLikeProduct(!likeProduct);
  };

  if (likeProduct === true) {
    var heartColor = { color: "#e74c3c" };
  }

  if (likeProduct === false) {
    var heartColor = { color: "gray" };
  }

  return (
    <>
      <ScrollView style={styles.body}>
        <View style={styles.body}>
          <View style={styles.container}>
            <View>
              <Ionicons
                name="chevron-back-circle-outline"
                size={30}
                color="#737373"
                onPress={goBack}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Card.Image
                style={styles.image}
                source={{ uri: props.saveDetailArticle.img }}
                resizeMode="contain"
              />
            </View>

            <View style={styles.mainproductinfolines}>
              <View style={styles.productandfavoriteline}>
                <View>
                  <Text style={styles.producttitle}>
                    {props.saveDetailArticle.nom}
                  </Text>
                </View>

                <View>
                  <Icon
                    name="favorite"
                    size={30}
                    style={heartColor}
                    onPress={() => {
                      props.addtoFavlist(props.saveDetailArticle);
                      props.saveHeartColor(likeProduct);
                      handleFavoriteClick();
                    }}
                  />
                </View>
              </View>

              <View style={styles.addquantityandpriceline}>
                <View style={styles.mainproductinfolines}>
                  <View>
                    <Text style={styles.price}>
                      {props.saveDetailArticle.prix} €
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.unit}>le kg</Text>
                  </View>
                </View>
              </View>

              <View>
                <View style={styles.marginTopshowhidemenu}>
                  <View style={styles.firstlineshowhidemenu}>
                    <Text style={styles.titleshowhidemenu}>
                      Détails du produits
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
                    <Text style={styles.titleshowhidemenu}>
                      Infos nutritionnelles
                    </Text>
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
                    props.onAddToCart(props.saveDetailArticle);
                  }}
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
