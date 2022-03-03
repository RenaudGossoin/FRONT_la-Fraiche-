
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import {Card} from 'react-native-elements';
import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';


function CategoriesScreen(props) {

  const categories = ['légumes', 'fruits', 'oeufs', 'laitage' ]

  const [categoryIndex, setCategoryIndex] = useState(0);

const CategoryList = () =>{
  return(
  <View style={styles.categoryContainer}>
    {categories.map((item, index)=>(
      <TouchableOpacity key={index} onPress={()=> setCategoryIndex(index)}>

      <Text
      key={index}
      style={[
        styles.categoryText,
        categoryIndex == index && styles.categoryTextSelected
      ]}>
        {item}
        </Text>
      </TouchableOpacity>
      
    ))}
  </View>
  )
}

  const goTo = () => props.navigation.navigate('Product', {screen: "ProductScreen"});
  
    return (
      <>
      <ScrollView style={styles.body}>
      <View style={{backgroundColor:"#53B175"}}>
<CategoryList/>
</View>
        <View style={styles.body}>
            <View style={styles.title}>
              <Text style={styles.bigtitle}>La Fraiche</Text>
              <Text style={styles.subtitle}>Catégories</Text>
            </View>



            <View style={styles.container}>
              <Card containerStyle={styles.category}>
                <Card.Image
                  style={styles.imageup}
                  source={require('../assets/cat-fruits.png')}
                />
                <Text style={styles.categoryname}>Fruits</Text>

                
                  <Pressable  
                  style={styles.button}
                  title="Fruits"
                  onPress={goTo}  />
               

              </Card>

              <Card containerStyle={styles.category}>
                <Card.Image
                  style={styles.imageup}
                  source={require('../assets/cat-légumes.png')}
                />
                <Text style={styles.categoryname}>Légumes</Text>
                
                <Pressable 
                  style={styles.button}
                  onPress={goTo}
                  />
              </Card>

              <Card containerStyle={styles.category}>
                <Card.Image
                  style={styles.imagedown}
                  source={require('../assets/cat-panier-oeufs.png')}
                />
                <Text style={styles.categoryname}>Oeufs</Text>
                <Pressable 
                  style={styles.button}
                  onPress={goTo}
                  />
              </Card>

              <Card containerStyle={styles.category}>
                <Card.Image
                  style={styles.imagedown}
                  source={require('../assets/cat-laitage.png')}
                />
                <Text style={styles.categoryname}>Laitages</Text>
                <Pressable 
                  style={styles.button}
                  onPress={goTo}
                  />
              </Card>
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
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    //marginTop: 20,
  },

  bigtitle: {
    // fontFamily: "Rochester",

    color:'#53B175',
  },

  subtitle: {
    // fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 100,
    marginBottom: 20,
  },
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      display: "flex",
      flexDirection: "row",
      flexWrap : "wrap",
    },

    category : {
      width: 150,
      height: 190,
      borderRadius : 18,
      backgroundColor: '#53B175',
      borderStyle: 'solid',
      borderColor: '#5375752B',
      position: 'relative',

      shadowColor: "#000",
      shadowOffset: {
        width: 5,
        height: 5,
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    },
    imageup: {
      //width: 130,
      height: 80,
      marginBottom: 10,
      marginTop: 30,
      resizeMode: 'contain'
    },
    imagedown: {
      width: 130,
      height: 130,
      marginBottom: 10,
      //resizeMode: 'contain'

    },
    categoryname : {
      textAlign : 'center',
      color: '#ffffff',
      // fontFamily: 'Montserrat',
      fontWeight: 'bold'
    },

    categoryContainer : {
      flexDirection : 'row',
      marginTop : 50,
      marginBottom : 20,
      paddingHorizontal:20,
      justifyContent:'space-between',
    },
    categoryText:{fontSize:18, color:'#ffffff', fontWeight:'bold', opacity:0.5,},

    categoryTextSelected:{
      color: '#ffffff',
      fontWeight:'bold',
      opacity:1,
      paddingBottom:3,
      borderBottomWidth:2,
      borderColor:'#ffffff'
    },

    button : {
      
      backgroundColor: "#FFFFFF",
      opacity : 0,
      borderRadius: 10,
      paddingVertical: 80,
      paddingHorizontal: 65,
      position : 'absolute',
    }

  });    
    

  
export default CategoriesScreen;