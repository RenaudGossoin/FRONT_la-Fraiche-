import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Button } from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Divider from 'react-native-divider';


const DetailScreen = () => {
    return (
      <>
      <ScrollView style={styles.body}>
      <View style={styles.body}>
              <View style={styles.container}>
                    <View>
                        <Card.Image
                          style={styles.image}
                          source={require('../assets/cerises.png')}
                        />
                    </View>

                    <View style={styles.mainproductinfolines}>
                        <View style={styles.productandfavoriteline}>
                            <View><Text style={styles.producttitle}>Cerises</Text></View>
                            <View>
                                <Icon
                                    style={styles.icon}
                                    name="favorite"
                                    size={25}
                                    // color={plant.like ? COLORS.red : COLORS.black}
                                />
                            </View>
                        </View>
                        
                        
                        <View style={styles.addquantityandpriceline}>
                            <View style={styles.blockbutton}>
                                <Button
                                  title="-"
                                  color="gray"
                                  buttonStyle={styles.button}
                                  // type="outline"
                                  // titleStyle={{ color: "#636e72" }}
                                  // containerStyle={{
                                  //   marginRight: 10,
                                  // }}
                                  onPress={() => console.log("add : click réussi")}
                                />
                                <Text style={styles.quantity}>1</Text>
                                <Button
                                  title="+"
                                  color="#53B175"
                                  buttonStyle={styles.button}
                                  // type="outline"
                                  // titleStyle={{ color: "#636e72" }}
                                  // containerStyle={{
                                  //   marginLeft: 10,
                                  // }}
                                  onPress={() => console.log("minus: click réussi")}
                                />
                            </View>

                            <View style={styles.ainproductinfolines}>
                                <View><Text style={styles.price}>3,20€</Text></View>
                                <View>
                                    <Text style={styles.unit}>le kg</Text>
                                </View>
                                
                            </View>
                            
                        </View>

                    <View>
                    
                    <View style={styles.marginTopshowhidemenu}>

                      <View style={styles.firstlineshowhidemenu}>
                        <View>
                          <Text style={styles.titleshowhidemenu}>Détails du produits</Text>
                        </View>

                        <View>
                          <Icon
                              style={styles.icon}
                              name="arrow-drop-down"
                              size={30}
                              />
                        </View>

                      </View>
                      <Text style={styles.textshowhidemenu}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu laoreet nibh. Duis finibus odio.</Text>
                    </View>

                    <View style={styles.marginTopshowhidemenu}>

                    <View style={styles.firstlineshowhidemenu}>
                      <View>
                        <Text style={styles.titleshowhidemenu}>Infos nutritionnelles</Text>
                      </View>

                      <View>
                        <Icon
                            style={styles.icon}
                            name="arrow-drop-down"
                            size={30}
                            />
                      </View>

                    </View>
                    {/* <Text style={styles.textshowhidemenu}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu laoreet nibh. Duis finibus odio.</Text> */}
                    </View>

                    <View style={styles.marginTopshowhidemenu}>

                    <View style={styles.firstlineshowhidemenu}>
                      <View>
                        <Text style={styles.titleshowhidemenu}>Conseils</Text>
                      </View>

                      <View>
                        <Icon
                            style={styles.icon}
                            name="arrow-drop-down"
                            size={30}
                            />
                      </View>

                    </View>
                    {/* <Text style={styles.textshowhidemenu}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu laoreet nibh. Duis finibus odio.</Text> */}
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
};

const styles = StyleSheet.create({
    body: {
      backgroundColor: '#ffffff',
    },

    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      display : 'flex',
      flexDirection : 'column',
      
      marginTop: 150,
      padding: 30,
    },

    image: {

      width: 329,
      height: 200,
      marginBottom: 0,
      marginTop: 20,
      marginRight: 13,
      marginLeft: 13,
      
    },

    mainproductinfolines : {
      display : 'flex',
      flexDirection : 'column',
    },

    productandfavoriteline : {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      marginTop: 20,
      
    },

    producttitle : {
      fontSize: 20,
      fontWeight: 'bold',
    },

    addquantityandpriceline : {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
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

    quantity : {
      fontSize: 20,
      fontWeight: 'bold',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 17,
      paddingRight: 17,
      borderColor: '#E2E2E2',
      borderWidth : 1,
      borderRadius : 17,
    },

    price : {
      fontSize: 25,
      fontWeight: 'bold',
      paddingTop: 15,
    },

    unit : {
      fontSize: 12,
      color: "#7C7C7C",
      textAlign: "left",
    },

    marginTopshowhidemenu : {
      marginTop : 40,
    },

    firstlineshowhidemenu : {
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'space-between'
    },

    titleshowhidemenu : {
      fontSize: 18,
      fontWeight : 'bold',
    },

    textshowhidemenu : {
      fontSize: 13,
      color: "#7C7C7C",
      textAlign: "left",
    },

    buttonaddtobasket : {
      backgroundColor : "#53B175",
      
      borderRadius: 17,
      height: 67,
    },

    textaddtobasketbutton : {
      fontSize: 18,
      fontWeight : 'bold',
      color : "#ffffff",
      textAlign : 'center',
      paddingTop: 20,
      paddingBottom: 20,
    },

  });    
    
export default DetailScreen;