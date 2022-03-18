import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground} from 'react-native'
import {Button} from 'react-native-elements'


export default function SuccessScreen(props)  {
    return (
<ImageBackground source={require("../assets/backgroundPetitPoisTomate.png")} style={{flex:1, paddingHorizontal:20}}>
{/* <View style={styles.container}> */}
  <View style={{
    justifyContent:"flex-start", alignItems: "center", marginTop:-20, marginLeft:-30, marginBottom:-50}}>
<Image source={require("../assets/Success-Img2.png")} style={{resizeMode:"contain", width:250}}></Image>
</View>
<View style={{flex: 1,
    justifyContent: "flex-start",
    alignItems: "center", marginTop:-50}}>

<Text style={{fontSize:25,}} >Votre paiement est validé !</Text>

<View style={{flexDirection:"row",}}>
<Text style={{fontSize:15, color: '#006D24'}}>Date de livraison prévu : </Text>
<Text style={{fontSize:15, fontWeight:"bold", color: '#006D24'}}>14/03/2022 </Text>
</View>

<Image source={require("../assets/codeBar.png")} style={{resizeMode:"contain",alignItems:"center", width:250, }}></Image>
<Text style={{fontSize:15,marginTop:-40, textAlign:"center"}}>Scannez moi pour retirer votre commande</Text>

</View>

<View>
</View>

<Button
          title="Suivre ma commande"
          buttonStyle={{ 
            backgroundColor: '#006D24', borderRadius: 30, paddingLeft: 50, paddingRight: 50, paddingBottom:10, paddingTop:10, marginTop:150}}
          onPress={() => props.navigation.navigate('Account')}
        />
        
        
        <Text
              style={{flex: 1,
                justifyContent: "center",
                textAlign:"center",
                alignItems: "center",
                marginTop: 15,
                textDecorationLine:'underline',
                fontWeight:'bold',
              }}
              onPress={() =>
                props.navigation.navigate('Categories')
              }
            >
              Retour à l'accueil
              </Text>
        {/* </View> */}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  }); 
    
