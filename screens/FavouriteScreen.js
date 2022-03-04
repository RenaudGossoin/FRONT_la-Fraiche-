
import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import {Card} from 'react-native-elements';
import {connect} from 'react-redux';

const FavouriteScreen = (props) => {
    return (
<ScrollView style={styles.body}>
    <View style={styles.container.displayColumn}>
    <Text style={styles.title}>Mes favoris</Text>
    <View>
          <View style={styles.displayRow}>
              <Card.Image
                  style={styles.imgProduct}
                  source={require('../assets/poires.png')}
                />
              
              <View style={styles.displayColumn}>
                <Text style={styles.productTitle}>Poires</Text>
                <Text style={styles.productInfos}>1 kg, 3,20€</Text>
              </View>

              <View style={styles.displayColumn}>
                <View style={styles.displayRow}> 
                    <Text style={styles.productPrice}>3,20€</Text>
                    <Card.Image
                      style={styles.imgTrash}
                      source={require('../assets/trash.png')}
                    />
                </View>
                <Pressable
                    style={styles.detailsButton}>
                    
                    <Text style={styles.textdetailButton}>détails</Text>
                </Pressable>

              </View>
          </View>


          <View style={styles.displayRow}>
              <Card.Image
                  style={styles.imgProduct}
                  source={require('../assets/radis.png')}
                />
              
              <View style={styles.displayColumn}>
                <Text style={styles.productTitle}>Radis</Text>
                <Text style={styles.productInfos}>1 kg, 1,50€</Text>
              </View>

              <View style={styles.displayColumn}>
                <View style={styles.displayRow}> 
                    <Text style={styles.productPrice}>1,50€</Text>
                    <Card.Image
                      style={styles.imgTrash}
                      source={require('../assets/trash.png')}
                    />
                </View>
                <Pressable
                    style={styles.detailsButton}>
                    
                    <Text style={styles.textdetailButton}>détails</Text>
                </Pressable>

              </View>
          </View>


    </View>
    </View>
</ScrollView>
    );
};

const styles = StyleSheet.create({
  body : {
    backgroundColor: '#ffffff',
  },

  container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    title : {
      marginTop : 55,
      textAlign : 'center',
      fontWeight : 'bold',
      fontSize : 20,

      marginBottom : 40,
    },

   

    imgProduct : {
      width : 55,
      height: 55,
      

      marginLeft : 15,
      marginRight : 15,
      marginTop : 30,
    },

    productTitle : {
      fontWeight : 'bold',
      fontSize : 14,

      paddingTop : 5,
      marginBottom : 10,
    },

    productInfos : {
      fontSize : 12,
      color : '#7C7C7C',
    },

    productPrice : {
      paddingTop : 5,
      marginLeft : 150,
      
      fontSize : 14,
      fontWeight : 'bold',
    },

    displayRow : {
      display : 'flex',
      flexDirection : 'row',
    },

    displayColumn : {
      display : 'flex',
      flexDirection: 'column',

      marginTop : 30,
    },

    imgTrash : {
      width : 15,
      height: 15,
      marginTop : 5,
      marginLeft : 10,
    },

    detailsButton : {
      backgroundColor: "#53B175",
      opacity : 1,
      width : 85,
      borderRadius: 17,
      paddingTop: 2,
      paddingBottom: 2,
      marginTop: 5,
      marginLeft : 130,

    },

    textdetailButton : {
      marginLeft : 'auto',
      marginRight : 'auto',
      color : "#ffffff",
      fontSize : 14,
      fontWeight : 'bold',
    },
  });    
    
function mapStateToProps(state) {
  return { token: state.token };
}
export default connect(mapStateToProps, null)(FavouriteScreen);
