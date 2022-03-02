import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native'
import {Button} from 'react-native-elements'


export default function ErrorScreen () {
    return (
<View style={styles.container}>
  <View style={{alignItems: 'center', justifyContent: 'center', flex: 4}}>
<Image source={require('../assets/Error-Img.png')}></Image>
</View>
<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
<Text style={{fontSize:25, flex: 1}} >Oops! Echec de la commande</Text>
<Text style={{fontSize:15, flex: 1}}>Quelque chose à mal tourné</Text>

</View>



<Button
          title="Réessayer encore"
          
          buttonStyle={{ backgroundColor: '#53B175', borderRadius: 10, paddingLeft: 50, paddingRight: 50, paddingBottom:10, paddingTop:10}}
        />
        
        <Text style={{height: 60, marginVertical: 10}}>Retour à l'accueil</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });    
    
