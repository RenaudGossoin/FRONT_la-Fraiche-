
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView  } from 'react-native';
import { Overlay, Input, CheckBox, Button} from 'react-native-elements'

import {connect} from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons'; 


import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";




function LockerScreen(props) {
  //const [isDisabled, setIsDisabled] = useState(false);
//console.log('lire idsavelocker',props.saveIdLocker);
  //console.log(props.saveValidateCart);
  //console.log('lire saveBasket',props.saveBasket);
  const goBack = () => props.navigation.navigate('BottomNavigator', {screen: 'Basket'});
  const [lockersList, setLockersList] = useState([])
  //const [isDisabled, setIsDisabled] = useState(false)
  var isChecked = false

  const [lockerSelected, setLockerSelected] = useState(null) 
  const [credit, setCredit] = useState(false);
  const [paypal, setPaypal] = useState(false);
  const [gpay, setGpay] = useState(false);
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [currentLongitude, setCurrentLongitude] = useState(0);
  const [addPOI, setAddPOI] = useState(false);
  const [listPOI, setListPOI] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [deliveryDate, setDeliverytDate] = useState('');
  const [listIdBasket, setListIdBasket] = useState([]);
  
  useEffect(() => {
    const Lockers = async () => {
      const data = await fetch(
        `https://lafraiche.herokuapp.com/lockers?token=${props.saveToken}`
      );
      const body = await data.json();
      //console.log(body);
      setLockersList(body.result);
    };
    Lockers();
  }, []);
 // console.log(lockersList);
 console.log('basket a voir',props.saveBasket)
 var test = props.saveBasket
 var tab = []
  var idList = test.map((article, i) => {
   tab = [...listIdBasket, article._id]
  });
  console.log('idlist',idList);
  console.log('isbaask', tab)

  useEffect(() => {
    async function askPermissions() {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === "granted") {
        var location = await Location.getCurrentPositionAsync({})
          setCurrentLatitude(location.coords.latitude);
          setCurrentLongitude(location.coords.longitude);
      }
    }
    askPermissions();
  }, []);

  var markerPOI = lockersList.map((POI, i) => {
    return (
      <Marker
        key={i}
        pinColor="blue"
        coordinate={{ latitude: POI.latitude, longitude: POI.longitude }}
        title={POI.nom}
      />
    );
  });

  var selectPOI = (e) => {
    if (addPOI) {
      setAddPOI(false);
      setIsVisible(true);
      setTempPOI({
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
      });
    }
  };

  var handleSubmit = () => {
    var copyListPOI = [
      ...listPOI,
      {
        longitude: tempPOI.longitude,
        latitude: tempPOI.latitude,
        titre: titrePOI,
        description: descPOI,
      },
    ];
    AsyncStorage.setItem("POI", JSON.stringify(copyListPOI));

    setListPOI(copyListPOI);
    setIsVisible(false);
    setTempPOI();
    setDescPOI();
    setTitrePOI();
  };
//selection de la methode de paiement
const laCB = () => {
  setCredit(true);
  setPaypal(false);
  setGpay(false);  
}
const lePaypal = () => {
  setCredit(false);
  setPaypal(true);
  setGpay(false);  
}
const legpay = () => {
  setCredit(false);
  setPaypal(false);
  setGpay(true);  
}
useEffect(() => {

  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear();
  setCurrentDate(
    date + '/' + month + '/' + year 
    + ' '
  ); 
  var date = new Date().getDate()+2; //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear();
  setDeliverytDate(
    date + '/' + month + '/' + year 
    + ' '
  ); 
//console.log(deliveryDate);
 // setDeliverytDate(currentDate.setDate(currentDate.getDate()+2));
}, []);// console.log(currentDate, deliveryDate);

 //montrer mes checkboxes


 //console.log('pagelocker',lockersList)
 var checkboxList = lockersList.map((casier, i) => {
  //console.log(lockerSelected);
  
   
   //console.log('log du nom casier',casier.nom)
  return (
    
    <CheckBox
    title={casier.nom}
    key={i}
    onPress={() => {setLockerSelected(i); props.onIdSelected(casier)} }
    checked={lockerSelected===i}
    
        />
  );
}); 

console.log('recup des données',  props.saveIdLocker._id)
var handleSubmitOrder = async () => {
  //console.log(username);
  const data = await fetch("https://lafraiche.herokuapp.com/orders", {
    method: "POST",
    headers: { 
      "Content-Type": "application/x-www-form-urlencoded" },
    body: `totalOrder=${props.saveValidateCart}&date_insert=${currentDate}&date_shipment=${deliveryDate}&articles=${tab}&locker=${props.saveIdLocker._id}&token=${props.saveToken}`
    
  });
  const body = await data.json()
  console.log('récuperation des données',body)
  
}

  return (
    
    <View style={{ flex: 1 }} >
      <View style={{ flexDirection: 'row',
                    padding: 40,
                    backgroundColor: "#53B175",
                    paddingBottom: 15
                    }}>
                      <MaterialIcons style={{flex: 1, color: 'white', fontSize:18, paddingLeft:1}} name="arrow-back-ios" size={24} color="white" onPress={goBack}/> 
      <Text style={{flex: 1, textAlign:'left', color: 'white', fontSize:18, paddingRight:70}}>Mon locker</Text>
      
    </View>
                    
            <View style = {{flexDirection: 'row', margin: 10}}>
              <Text  style={{flex: 1, fontSize:20, }}>
                Votre panier : 
              </Text>
              <Text style={{textAlign: 'right', flex: 1, fontSize:20}}>{props.saveValidateCart}€</Text>
            </View>
      
      

      
        <Overlay
          overlayStyle={{
            height: "60%",
            width: "80%",
            borderRadius: 10,
            padding: -10,
          }}
          isVisible={isVisible}
          onBackdropPress={() => {
            setIsVisible(false);
          }}
        >
          <ScrollView>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#53B175",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            >
              <Text style={{ color: "white", fontSize: 25, margin: 5 }}>
                Je choisis mon locker
              </Text>
            </View>
{checkboxList}
            
          </ScrollView>

          <Button
          
            title="Confirmer"
            onPress={() => {
             
              setIsVisible(false);
            }}
            //disabled={isDisabled}
            buttonStyle={{ backgroundColor: "#53B175", borderRadius: 10 }}
            containerStyle={{
              marginHorizontal: 70,
              marginVertical: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Overlay>
      

      <MapView
        onPress={() => {
          setIsVisible(!isVisible);
        }}
        style={{ height: 230 }}
        initialRegion={{
          latitude: 48.866667,
          longitude: 2.333333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          key={"currentPos"}
          pinColor="red"
          title="Hello"
          description="I'am here"
          coordinate={{
            latitude: currentLatitude,
            longitude: currentLongitude,
          }}
        />

        {markerPOI}
      </MapView>

            <View>
            <View style={{padding:10}}>
              <Text style={{fontSize:18, textAlign:'center'}}>
                Mon locker choisi :
              </Text>
              <Text style={{fontSize:15 }}>
                {props.saveIdLocker.nom} 
              </Text>
              <Text style={{fontSize:15 }}>
              {props.saveIdLocker.adresse}
              </Text>
            </View>
              <CheckBox 
              title='Credit/ Debit Card'
              checked={credit}
              onPress={laCB}/>
              <CheckBox 
              title='Paypal'
              checked={paypal}
              onPress={lePaypal}/>
              <CheckBox 
              title='Gpay :  Credit/ Debit Card'
              checked={gpay}
              onPress={legpay}/>
              
        </View>
      
             <Button
                title="Valider ma commande"
                buttonStyle={{ backgroundColor: '#53B175', borderRadius: 10, margin: 30, marginVertical: 10}}
                onPress={() =>{ handleSubmitOrder();  props.navigation.navigate('Payment')}}
              />
        
        
    </View>
    
  );
}
function mapDispatchToProps(dispatch) {
  return {
    onIdSelected: function (locker) {
      dispatch({ type: "selectedId", locker });
    }

  };
}


function mapStateToProps(state) {
  return { 
            saveToken: state.saveToken,
            saveValidateCart: state.saveValidateCart,
            saveBasket: state.saveBasket,
            saveIdLocker: state.saveIdLocker,
     };
}

export default connect(mapStateToProps, mapDispatchToProps)(LockerScreen);
