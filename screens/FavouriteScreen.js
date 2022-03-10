
import React from 'react';
import { View, Image, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import {connect} from 'react-redux';



function FavouriteScreen(props) {
// console.log("favlist", props.addtoFavlist);
// console.log("favlist", props.saveToken);

var noArticles;
if (props.addtoFavlist.length == 0) {
  noArticles = "No Favorite Articles";
}

const favArray = props.addtoFavlist.map((item, _id) => {
  return (
      <View key={item._id} style={styles.displayRow}>
          
            <Image
              style={styles.imgProduct}
              source={{ uri: item.img }}
            />
          
          
              <View style={styles.displayColumn2}>
                  <Text style={styles.productTitle}>
                        {item.nom}</Text>
                  <Text style={styles.productInfos}>{item.prix} €</Text>
              </View>

          <View>
              <View style={styles.displayColumn3}>
                 <View style={styles.displayRow}>
                    <Text style={styles.productPrice}>{item.prix} €</Text>
                     
                      <Card.Image
                        style={styles.imgTrash}
                        source={require('../assets/trash.png')}
                        onPress={() => props.onDeleteFavArticle(item)}
                      />
                </View>

                
                  <Pressable
                    style={styles.detailsButton}>

                  <Text style={styles.textdetailButton}>détails</Text>
                </Pressable>
              
              </View>
               
          </View>   
      </View>
   
);
})

// console.log("favarr", favArray)

    return (
<ScrollView style={styles.body}>


    <View style={styles.container.displayColumn}>
    <Text style={styles.title}>Mes favoris</Text>
    <View>
    <Text style={{ marginTop: 50, fontSize: 18, fontWeight : "bold", textAlign : "center" }}>{noArticles}</Text>
    {favArray}
       

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
      marginTop : 60,
      textAlign : 'center',
      fontWeight : 'bold',
      fontSize : 20,

      marginBottom : 20,
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
      marginBottom : 3,
      marginLeft : 65,
      
      fontSize : 14,
      fontWeight : 'bold',
      width :45,
    },

    displayRow : {
      display : 'flex',
      flexDirection : 'row',

    },

    displayColumn2 : {
      display : 'flex',
      flexDirection: 'column',

      marginTop : 30,
    width : 150,
    },

    displayColumn3 : {
      display : 'flex',
      flexDirection: 'column',

      marginTop : 30,
      backgroundColor : '#ffffff',
      width : 50,
    },

   

    imgTrash : {
      width : 15,
      height: 15,
      marginTop : 5,
      marginLeft : 0,
    },

    detailsButton : {
      backgroundColor: "#53B175",
      opacity : 1,
      width : 85,
      borderRadius: 17,
      paddingTop: 2,
      paddingBottom: 2,
      marginTop: 5,
      marginLeft : 50,

    },

    textdetailButton : {
      marginLeft : 'auto',
      marginRight : 'auto',
      color : "#ffffff",
      fontSize : 14,
      fontWeight : 'bold',
    },
  });    

function mapDispatchToProps(dispatch) {
  return {
    onDeleteFavArticle: function (article) {
      dispatch({ type: "deleteArticleFavori", article });
    },
  };
}


function mapStateToProps(state) {
  return {
    saveToken: state.saveToken,
    addtoFavlist: state.addtoFavlist,
  };
}

export default connect(mapStateToProps, mapDispatchToProps, null)(FavouriteScreen);
