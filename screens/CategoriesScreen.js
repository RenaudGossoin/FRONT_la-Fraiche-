import { View, Text, StyleSheet, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';


const CategoriesScreen = () => {

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
          </Card>

          <Card containerStyle={styles.category}>
             <Card.Image
              style={styles.imageup}
              source={require('../assets/cat-légumes.png')}
            />
            <Text style={styles.categoryname}>Légumes</Text>
          </Card>

          <Card containerStyle={styles.category}>
             <Card.Image
              style={styles.imagedown}
              source={require('../assets/cat-panier-oeufs.png')}
            />
            <Text style={styles.categoryname}>Oeufs</Text>
          </Card>

          <Card containerStyle={styles.category}>
             <Card.Image
              style={styles.imagedown}
              source={require('../assets/cat-laitage.png')}
            />
            <Text style={styles.categoryname}>Laitages</Text>
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
    // paddingLeft: '80',
    // paddingRight: '80',
    // paddingTop: 147,
    // paddingBottom: '70%',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 147,
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
      width: 164,
      height: 190,
      borderRadius : 18,
      backgroundColor: '#53B175',
      borderStyle: 'solid',
      borderColor: '#5375752B',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
    },
    imageup: {
      width: 130,
      height: 80,
      marginBottom: 10,
      marginTop: 30,
    },
    imagedown: {
      width: 130,
      height: 130,
      marginBottom: 10
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
    }
  });    
    

  
export default CategoriesScreen;