import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";

// import Divider from 'react-native-divider';

import { connect } from "react-redux";

function DetailScreen(props) {
  const [showTextProductDetails, setShowTextProductDetails] = useState(false);
  const [showTextInfoNutri, setShowTextInfoNutri] = useState(false);
  const [showTextConseils, setShowTextConseils] = useState(false);
  const [likeProduct, setLikeProduct] = useState(false);

  const goBack = () =>
    props.navigation.navigate("Product", { screen: "ProductScreen" });

  var handleFavoriteClick = () => {
    setLikeProduct(!likeProduct);
    console.log('jai cliqué sur le coeur')
    console.log (likeProduct)
  }

  // var heartColor = '';
  // console.log (heartColor)
  // if(likeProduct === true){
  //   heartColor = '#e74c3c'
  // };
    return (
      <>
      <ScrollView style={styles.body}>
        <View style={styles.body}>
          <View style={styles.container}>
            <View>
              <TouchableOpacity onPress={goBack}>
                <Image
                  style={styles.imgGoback}
                  source={require("../assets/fleche-goback.png")}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Card.Image
                style={styles.image}
                source={require("../assets/cerises.png")}
              />
            </View>

                    <View style={styles.mainproductinfolines}>
                        <View style={styles.productandfavoriteline}>
                            <View><Text style={styles.producttitle}>Cerises</Text></View>
                            <View>
                              <Icon 
                                  name="favorite"
                                  size={30}
                                
                                  // color={heartColor}
                                  onPress={()=>handleFavoriteClick()}
                                  />
                            </View>
                        </View>
                        
                        
                        <View style={styles.addquantityandpriceline}>
                            <View style={styles.blockbutton}>
                                <Button
                                  title="-"
                                  color="gray"
                                  buttonStyle={styles.button}
                                  onPress={props.onDecreaseClick}
                                />
                                <Text style={styles.quantity}>{props.count}</Text>
                                <Button
                                  title="+"
                                  color="#53B175"
                                  buttonStyle={styles.button}
                                  onPress={props.onIncreaseClick}
                                />
                            </View>

                            <View style={styles.mainproductinfolines}>
                                <View><Text style={styles.price}>3,20€</Text></View>
                                <View><Text style={styles.unit}>le kg</Text></View>
                            </View>
                            
                        </View>

                    <View>
                    
                    <View style={styles.marginTopshowhidemenu}>
                        <View style={styles.firstlineshowhidemenu}>
                            <Text style={styles.titleshowhidemenu}>
                            Détails du produits</Text>

                            <TouchableOpacity 
                              onPress={() => setShowTextProductDetails(!showTextProductDetails)}
                              >
                                    <Image
                                        style={styles.imgFleche}
                                        source={require('../assets/fleche-deroulante-bas.png')}
                                      />
                            </TouchableOpacity>   
                            
                        </View>
                         
                        {showTextProductDetails && <View><Text style={styles.textshowhidemenu}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lorem ipsum, elementum ut nisl vel, pellentesque vestibulum turpis. Donec vulputate felis eu facilisis eleifend. Sed risus massa, imperdiet sed dui.</Text></View>}
                    </View>
                              

                    <View style={styles.marginTopshowhidemenu}>
                        <View style={styles.firstlineshowhidemenu}>
                            <Text style={styles.titleshowhidemenu}>
                            Infos nutritionnelles</Text>

                            <TouchableOpacity 
                              onPress={() => setShowTextInfoNutri(!showTextInfoNutri)}
                              >
                                    <Image
                                        style={styles.imgFleche}
                                        source={require('../assets/fleche-deroulante-bas.png')}
                                      />
                            </TouchableOpacity>   
                            
                        </View>
                         
                        {showTextInfoNutri && <View><Text style={styles.textshowhidemenu}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lorem ipsum, elementum ut nisl vel, pellentesque vestibulum turpis. Donec vulputate felis eu facilisis eleifend. Sed risus massa, imperdiet sed dui.</Text></View>}
                    </View>
                              

                    <View style={styles.marginTopshowhidemenu}>
                        <View style={styles.firstlineshowhidemenu}>
                            <Text style={styles.titleshowhidemenu}>
                            Conseils</Text>

                            <TouchableOpacity 
                              onPress={() => setShowTextConseils(!showTextConseils)}
                              >
                                    <Image
                                        style={styles.imgFleche}
                                        source={require('../assets/fleche-deroulante-bas.png')}
                                      />
                            </TouchableOpacity>   
                            
                        </View>
                         
                        {showTextConseils && <View><Text style={styles.textshowhidemenu}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lorem ipsum, elementum ut nisl vel, pellentesque vestibulum turpis. Donec vulputate felis eu facilisis eleifend. Sed risus massa, imperdiet sed dui.</Text></View>}
                    </View>
                              
                      
                    <Pressable 
                      style={styles.buttonaddtobasket}
                      
                      // onPress={goTo}
                      >
                    <Text style={styles.textaddtobasketbutton}>Ajouter au panier</Text>  
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

    marginTop: 50,
    padding: 30,
  },

  imgGoback: {
    width: 35,
    height: 20,
  },

  image: {
    width: 329,
    height: 200,
    marginBottom: 0,
    marginRight: 13,
    marginLeft: 13,
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
    paddingTop: 15,
  },

  unit: {
    fontSize: 12,
    color: "#7C7C7C",
    textAlign: "left",
  },

  marginTopshowhidemenu: {
    marginTop: 40,
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
    backgroundColor: "#53B175",

    borderRadius: 17,
    height: 67,

    marginTop: 80,
  },

  textaddtobasketbutton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function () {
      dispatch({ type: "increase" });
    },

    onDecreaseClick: function () {
      dispatch({ type: "decrease" });
    },
  };
}

function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
