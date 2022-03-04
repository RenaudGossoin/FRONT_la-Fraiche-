import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView  } from 'react-native';
import { Overlay, Input, CheckBox, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

//pr disable si plus de 1 checkbox, maper sur [checkbox] et verifier if checkbox [i] === true, alors trouver le moyen de disable le button confirm.
//faire un [etat isDisable]

import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import CheckBoxLockers from './CheckBoxLockers';

function LockerScreen(props) {

  const [lockersList, setLockersList] = useState([])
  const [isDisabled, setIsDisabled] = useState(false)

 
  const [credit, setCredit] = useState(false);
  const [paypal, setPaypal] = useState(false);
  const [gpay, setGpay] = useState(false);
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [currentLongitude, setCurrentLongitude] = useState(0);
  const [addPOI, setAddPOI] = useState(false);
  const [listPOI, setListPOI] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  console.log(props.token);

  useEffect(() => {
    
    const Lockers = async() => {
      const data = await fetch(`https://lafraiche.herokuapp.com/lockers?departement=${props.saveDepartement}`)
      const body = await data.json()
      //console.log(body);
      setLockersList(body.result)
      
    }
    Lockers() 
  }, [])
  //console.log(lockersList);
//console.log(props.saveDepartement);
  useEffect(() => {
    async function askPermissions() {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === "granted") {
        Location.watchPositionAsync({ distanceInterval: 2 }, (location) => {
          setCurrentLatitude(location.coords.latitude);
          setCurrentLongitude(location.coords.longitude);
        });
      }
    }
    askPermissions();
  }, []);

  var markerPOI = lockersList.map((POI, i) => {
    return <Marker key={i} pinColor="blue" coordinate={{ latitude: POI.latitude, longitude: POI.longitude }}
      title={POI.nom}
    />
  });
  
  
  

  var selectPOI = (e) => {
    if (addPOI) {
      setAddPOI(false);
      setIsVisible(true);
      setTempPOI({ latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude });
    }
  }

  var handleSubmit = () => {

    var copyListPOI = [...listPOI, { longitude: tempPOI.longitude, latitude: tempPOI.latitude, titre: titrePOI, description: descPOI }];
    AsyncStorage.setItem("POI", JSON.stringify(copyListPOI));

    setListPOI(copyListPOI);
    setIsVisible(false);
    setTempPOI();
    setDescPOI();
    setTitrePOI();
  }



  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          textAlign: "center",
          paddingTop: 40,
          backgroundColor: "#53B175",
          paddingBottom: 15,
        }}
      >
        
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center',
         justifyContent: 'center',
         backgroundColor:'#53B175', borderTopLeftRadius:10, borderTopRightRadius:10}}>
          <Text style={{ color: 'white', fontSize:25, margin:5 }}>Je choisis mon locker</Text>
          </View>  
          
          <CheckBoxLockers
          />
          
        
        </ScrollView> 
        


          <Button
            title="Confirmer"
            onPress={() => {setIsVisible(false)}}
            //disabled={isDisabled}
            buttonStyle={{ backgroundColor: '#53B175', borderRadius: 10 }}
                containerStyle={{
                  marginHorizontal: 70,
                  marginVertical: 10,
                  alignItems: 'center', 
                  justifyContent: 'center'}}      
          />
        
      
      </View>

      <View style={{ flexDirection: "row", margin: 10 }}>
        <Text style={{ flex: 1, fontSize: 20 }}>Votre panier :</Text>
        <Text style={{ textAlign: "right", flex: 1, fontSize: 20 }}>100€</Text>
      </View>
      

      <MapView
        onPress={() => {
          setIsVisible(!isVisible);
        }}
        style={{ flex: 1 }}
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

      <View style={{ margin: -10 }}>
        <CheckBox
          title="Credit/ Debit Card"
          checked={credit}
          onPress={() => setCredit(!credit)}
        />
        <CheckBox
          title="Paypal"
          checked={paypal}
          onPress={() => setPaypal(!paypal)}
        />
        <CheckBox
          title="Gpay :  Credit/ Debit Card"
          checked={gpay}
          onPress={() => setGpay(!gpay)}
        />
      </View>

      <Button
        title="Valider ma commande"
        buttonStyle={{
          backgroundColor: "#53B175",
          borderRadius: 10,
          margin: 30,
          marginVertical: 10,
        }}
        onPress={() => props.navigation.navigate("Error")}
      />
    </View>
  );
}




function mapStateToProps(state) {
  return { saveDepartement : state.saveDepartement, token: state.token }
}

export default connect(
  mapStateToProps, 
  null
)(LockerScreen);
