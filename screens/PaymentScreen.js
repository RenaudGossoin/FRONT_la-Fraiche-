import {  useConfirmPayment, CardField } from '@stripe/stripe-react-native';
import {View, Text, ImageBackground, StyleSheet,   TextInput,} from "react-native" 
import {Button} from "react-native-elements"
import { connect } from "react-redux";

import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';


function PaymentScreen(props) {
 // console.log('payementscreen',props.saveValidateCart);
  /*const {confirmPayment, loading} = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`https://lafraiche.herokuapp.com/users?orders=${props.saveOrders}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'eur',
      }),
    });

    const {paymentIntent, error} = await confirmPayment(clientSecret, {
      type: 'Card',
      billingDetails,
    });

    if (error) {
      console.log('Payment confirmation error', error);
    } else if (paymentIntent) {
      console.log('Success from promise', paymentIntent);
    }
  };*/
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");

  return (
<ImageBackground
      source={require("../assets/backgroundSignIn.png")}
      style={styles.container}
    >
      <ScrollView>
        <View>
      <Text style={{ fontSize: 23, fontWeight: "bold", marginBottom: 20 }}>
        Paiement par carte bancaire
              </Text>
              
              <View style={{flexDirection:"row"}}>
          
          <Text style={{fontSize:18
            , textAlign: "center"}}>
              Votre commande de : 
          </Text>
          <Text style={{fontSize:18, fontWeight:"bold",
             textAlign: "center", color:"#006D24"}}>
              {" "}{props.saveValidateCart.toFixed(2)}€
          </Text>
      </View>
      </View>

<View style={{flexDirection:"row", justifyContent:"space-between"}}>
<Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#737373",
          marginTop: 15,
          marginBottom: 5,
          marginLeft:10
        }}
      >
numéro de carte
</Text>
<Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#737373",
          marginTop: 15,
          marginBottom: 5,
          marginRight:50
        }}
      >
        CVC
      </Text>
</View>
<View style={{flexDirection:"row", justifyContent:"space-between", marginBottom:20}}>
<TextInput
          placeholder="7419 9412 5910 9218"
          style={{
            // flex: 1,
      borderRadius:30,
      paddingBottom: 5,
      paddingHorizontal:20,
      opacity: 0.5,
      backgroundColor:'#c7c4c4',
      borderWidth:1,
      width:"65%"
          }}

          onChangeText={(value) => setUsername(value)}
        />

<TextInput
          placeholder="253"
          style={{
      borderRadius:30,
      opacity: 0.5,
      backgroundColor:'#c7c4c4',
      borderWidth:1,
      paddingHorizontal:20,
width:"30%"
          }}
          onChangeText={(val) => setEmail(val)}
        />

</View>
      
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
       
      </View>

      
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          borderColor: "#979797",
        }}
      >
      
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#737373",
          marginBottom: 5,
          marginLeft:10

        }}
      >
nom figurant sur la carte      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginBottom:20,
          
        }}
      >
        
        <TextInput
          placeholder="Steve Hostin"
          style={{
            flex: 1,
      borderRadius:30,
      paddingBottom: 5,
      opacity: 0.5,
      backgroundColor:'#c7c4c4',
      paddingHorizontal:20,
      borderWidth:1
          }}
          onChangeText={(val) => setUsername(val)}
        />
      </View>
      
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between" }}>
        <View>

        <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#737373",
          marginLeft:10

          // marginBottom: 5,
        }}
      >
date de validité      </Text>
<TextInput
          placeholder="05/09/06"
          style={{
      borderRadius:30,
      paddingBottom: 5,
      opacity: 0.5,
      backgroundColor:'#c7c4c4',
      paddingHorizontal:20,
      borderWidth:1,
      alignItems:"center",
      justifyContent:"center"
          }}
          //onChangeText={(val) => setDepartement(val)}
        />
       
        </View>
        
      </View>
      <Button
          title="Payer ma commande"
          buttonStyle={styles.button}
          onPress={() => props.navigation.navigate('Success')}        />
      <View style={{ alignItems: "center", marginTop: 10 }}>
      <Text
        style={{
          alignItems:'center',
          textDecorationLine:'underline',
          fontWeight:'bold'}}
      onPress={() =>
        props.navigation.navigate('Basket')
      }
    >
      Annuler
      </Text>
      </View>
    {/* <View style={{
            justifyContent:'center',
            alignItems:'center',
            width: '100%', 
            height: 70,
            marginVertical: 100,
          }}>
    <CardField
          placeholder={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={{
            
            backgroundColor: '#808080',
            textColor: '#ffffff',
          }}
          style={{
            
            width: '100%', 
            height: 70,
            marginVertical: 100,
          }}
        />
        <CardField/>

    </View>
       



        <Button
          title="Payer"
          
          buttonStyle={{ 
            backgroundColor: '#006D24', borderRadius: 30, margin:50}}
          onPress={() => props.navigation.navigate('Success')}
        ></Button>
       
      
      <View style={{
                alignItems:'center',
        }}>
        <Text
        style={{
          alignItems:'center',
          textDecorationLine:'underline',
          fontWeight:'bold'}}
      onPress={() =>
        props.navigation.navigate('Basket')
      }
    >
      Annuler
      </Text>
      
</View> */}
</ScrollView>
</ImageBackground>


    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
      justifyContent: "center",
      paddingHorizontal: 30,
      paddingTop: 150,
    },
    textInput: {
      flex: 1,
      borderRadius:30,
      paddingBottom: 5,
      opacity: 0.5,
      backgroundColor:'gray',
      borderWidth:1
    },
    textInputPassword: {
      flex: 1,
      //borderColor:'#737373',
      paddingBottom: 5,
      opacity: 0.5,
    },
    button: {
      height: 45,
      //width:100,
      backgroundColor: "#006D24",
      borderRadius: 30,
      marginTop: 20,
    },
  });
  

  function mapStateToProps(state) {
    return { 
              
              saveValidateCart: state.saveValidateCart,
              saveBasket: state.saveBasket,
       };
  }
  
  export default connect(mapStateToProps, null)(PaymentScreen);
  