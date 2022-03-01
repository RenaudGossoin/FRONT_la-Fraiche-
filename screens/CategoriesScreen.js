import React, {useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, } from 'react-native'
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

<SafeAreaView style={{
  flex:1,
}}>
<View style={{backgroundColor:"#53B175"}}>
<CategoryList/>
</View>


</SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
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