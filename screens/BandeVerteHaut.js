import React from 'react';
import { View, StyleSheet,Text, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialIcons } from '@expo/vector-icons'; 



const BandeVerteHaut = () => {
    return (
<View style={{ flex: 1 }} >
    <View style={{
        flex:1,
        backgroundColor: "#53B175",
                    paddingBottom: 15,
                    paddingRight:20,
                    paddingTop:40,
                    paddingLeft:20}}>
                    <MaterialIcons name="arrow-back-ios" size={24} color="white" />
      <View style={{ 
          flex:1,
          alignItems: 'flex-end',
          justifyContent:'flex-end',
                    textAlign: "center",
                    }}>

      <Text style={{ color: 'white', fontSize:18, fontWeight: 'bold' }}>Texte à dynamiser</Text>
      </View>
    </View>
    </View>
    );
};

/*const styles = StyleSheet.create({
    bandeVerte:{
      backgroundColor:'#53B175',
      height:100,
      flex:1,
      flexDirection:'row',
      alignItems:'flex-end',
      justifyContent:'flex-end',
      color:'#ffffff',
      paddingRight:'10%',
      paddingBottom:'2%'
    },
    text:{
        color:'#ffffff'

    }
})*/

export default BandeVerteHaut;