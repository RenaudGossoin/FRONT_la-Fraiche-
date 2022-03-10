import {  useConfirmPayment, CardField } from '@stripe/stripe-react-native';
import {View, Text} from "react-native" 
import {Button} from "react-native-elements"
import { connect } from "react-redux";


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

  return (
    
    
      <View>
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
          /*onCardChange={(cardDetails) => {
            console.log('cardDetails', cardDetails);
          }}
          onFocus={(focusedField) => {
            console.log('focusField', focusedField);
          }}*/
        />

        <View>
          
            <Text style={{fontSize:25
              , textAlign: "center"}}>
                Votre commande totale est de :
            </Text>
            <Text style={{fontSize:25
              , textAlign: "center", textDecorationLine:'underline'}}>
                {props.saveValidateCart}€
            </Text>
        </View>

        <Button
          title="Payer"
          
          buttonStyle={{ 
            backgroundColor: '#53B175', borderRadius: 10, margin:50}}
          onPress={() => props.navigation.navigate('Success')}
        />
       
      
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
      
</View>
</View>
    );
  }

  function mapStateToProps(state) {
    return { 
              
              saveValidateCart: state.saveValidateCart,
              saveBasket: state.saveBasket,
       };
  }
  
  export default connect(mapStateToProps, null)(PaymentScreen);
  