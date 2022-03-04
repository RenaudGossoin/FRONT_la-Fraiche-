import React from 'react';
import { View, StyleSheet,Text, SafeAreaView, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialIcons } from '@expo/vector-icons'; 

const BandeVerteHaut = () => {
    return (
        
    <SafeAreaView style={{
        display:'flex',
        height:'16%',
        backgroundColor: "#53B175",
                    paddingBottom: 15,
                    paddingTop:40,
                    paddingHorizontal:30}}>
                    <MaterialIcons name="arrow-back-ios" size={24} color="white" />
      <View style={{ 
          alignItems: 'flex-end',
          justifyContent:'flex-end',
                    }}>
      <Text style={{ color: 'white', fontSize:18, fontWeight: 'bold',  }}>Texte à dynamiser</Text>
      </View>
    </SafeAreaView>

    );
};

export default BandeVerteHaut;