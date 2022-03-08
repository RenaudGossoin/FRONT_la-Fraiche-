import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native'
import {Button} from 'react-native-elements'


export default function SuccessScreen(props)  {
    return (

<View style={styles.container}>
  <View style={{flex: 2,
    justifyContent: "flex-end",
    alignItems: "center", marginTop:80}}>
<Image source={require('../assets/Success-Img.png')}></Image>
</View>
<View style={{flex: 1,
    justifyContent: "flex-end",
    alignItems: "center", marginTop:55}}>
<Text style={{fontSize:25, flex: 1}} >Votre commande est validée !!!</Text>
<Text style={{fontSize:15, flex: 1}}>Nous recoltons votre commande</Text>

</View>



<Button
          title="Suivre ma commande"
          
          buttonStyle={{ 
            backgroundColor: '#53B175', borderRadius: 10, paddingLeft: 50, paddingRight: 50, paddingBottom:10, paddingTop:10, marginTop:50}}
          onPress={() => props.navigation.navigate('Account')}
        />
        
        
        <Text
              style={{flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: 15,
                textDecorationLine:'underline',
                fontWeight:'bold'}}
              onPress={() =>
                props.navigation.navigate('Categories')
              }
            >
              Retour à l'accueil
              </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  }); 
    
