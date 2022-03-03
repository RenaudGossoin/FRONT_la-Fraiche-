import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BandeVerteHaut from './BandeVerteHaut';

import {connect} from 'react-redux';


function ProductScreen(props) {


  const categories = ['légumes', 'fruits', 'oeufs', 'laitage' ]
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [departement, setDepartement] = useState("");
  const [articleList, setArticleList] = useState([]);


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
  
useEffect(() => {
  const findArticles = async() => {
    setDepartement(props.saveDepartement);
    const data = await fetch(`https://lafraiche.herokuapp.com/articles?departement=${props.saveDepartement}`)
    const body = await data.json()
    
    //console.log(body)
    setArticleList(body.articles) 
  }

  findArticles()
  //console.log(departement+" from UseEffect")

}, []);

//console.log(articleList)

const ArticlesArray = articleList.map((element,i)=>{
  console.log(element.img)
    return (
    <Card containerStyle={styles.item}>
    <Icon
    style={styles.icon}
    name="favorite"
    size={18}
    />
    <Card.Image
      style={styles.image}
      source={{uri:element.img}}
    />
    <View style={styles.textcontainer}>
      <View><Text style={styles.productandprice}>{element.nom}</Text></View>

      <View><Text style={styles.productandprice}>{element.prix}</Text></View>
    </View>

    <Text style={styles.productquantity}>6 pièces</Text>

    <Pressable 
    onPress={goTo}
    style={styles.button}
    >
    <Text style={styles.textbutton}>détails</Text>  
    </Pressable>
</Card>)
  })



  const goTo = () => props.navigation.navigate('Detail', {screen: "DetailScreen"});  

  return (
    <>
    {/* <BandeVerteHaut/> */}
      <ScrollView style={styles.body}>
            <View >
                  <Text style={styles.title}>Nos bons oeufs frais</Text>
            </View>
            <View style={styles.container}>
              {ArticlesArray}
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
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      //marginTop: 46+123,
      marginBottom: 25,
    },

    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      display: "flex",
      flexDirection: "row",
      flexWrap : "wrap",
      paddingBottom:'10%'
   

    },

    item : {
      width: '30%',
      height: '33%',
      borderRadius : 10,
      backgroundColor: '#ffffff',
      borderStyle: 'solid',
      borderColor: '#5375752B',
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
      paddingHorizontal:'2%',
      paddingBottom:'2%'
    },

    icon:{
      marginLeft: '80%',
    },

    image: {
      width: 60,
      height: 60,
      marginBottom: 0,
      marginTop: 0,
      marginRight: '5%',
      marginLeft: '5%',
      resizeMode: 'contain',
      
    },

    textcontainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      resizeMode: 'contain',

      marginTop: 5,
    },

    productandprice:{
      fontSize: 12,
      borderColor : '#000000',
      fontWeight: 'bold',
    },

    productquantity:{
      fontSize: 10,
      color : '#7C7C7C',
      marginTop: 3,
    },

    button : {
      backgroundColor: "#53B175",
      opacity : 1,
      borderRadius: 17,
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 7,
      marginTop: 15,
    },

    textbutton : {
      color: "#ffffff",
      width: 50,
      fontSize: 13,
      fontWeight: 'bold',
      // textAlign: "center",
      marginLeft : 'auto',
      marginRight : 'auto',
    },
    categoryContainer : {
      flexDirection : 'row',
      marginTop : 50,
      marginBottom : 20,
      paddingHorizontal:20,
      justifyContent:'space-between',
    },
    categoryText:{fontSize:18, color:'#ffffff', fontWeight:'bold', opacity:0.5,},

  });    
    
  function mapStateToProps(state) {
    return { saveDepartement : state.saveDepartement }
  }
  
  export default connect(
    mapStateToProps, 
    null
  )(ProductScreen);