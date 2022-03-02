import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView  } from 'react-native';
import { Overlay, Input, CheckBox, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';


import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function LockerScreen(props) {

  const [lockers, setLockers] = useState([])
  const [latitude, setLatitude] = useState([])
  const [longitude, setLongitude] = useState([])

  const [ferme1, setFerme1] = useState(false);
  const [ferme2, setFerme2] = useState(false);
  const [ferme3, setFerme3] = useState(false);
  const [ferme4, setFerme4] = useState(false);
  const [ferme5, setFerme5] = useState(false);
  const [credit, setCredit] = useState(false);
  const [paypal, setPaypal] = useState(false);
  const [gpay, setGpay] = useState(false);
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [currentLongitude, setCurrentLongitude] = useState(0);
  const [addPOI, setAddPOI] = useState(false);
  const [listPOI, setListPOI] = useState([]);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    async function askPermissions() {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
        Location.watchPositionAsync({ distanceInterval: 2 },
          (location) => {
            setCurrentLatitude(location.coords.latitude)
            setCurrentLongitude(location.coords.longitude);
          }
        );
      }
    }
    askPermissions();
  }, []);

  var markerPOI = listPOI.map((POI, i) => {
    return <Marker key={i} pinColor="blue" coordinate={{ latitude: POI.latitude, longitude: POI.longitude }}
      title={POI.titre}
      description={POI.description}
    />
  });
  var isDisabled = false;
  if (addPOI) {
    isDisabled = true;
  }

  useEffect(() => {
    
  const Lockers = async() => {
    const data = await fetch(`https://lafraiche.herokuapp.com/lockers?departement=${props.saveDepartement}`)
    const body = await data.json()
    console.log(body);
  }
  lockers() 
}, [])

  
  /*useEffect(() => {
    const findArticles = async() => {
      const data = await fetch(`https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=b32c8b844d1243b1a7998d8228910f50`)
      const body = await data.json()
      console.log(body)
      setArticleList(body.articles) 
    }

    findArticles()    
  },[])*/


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
    
    <View style={{ flex: 1 }} >
      <View style={{ alignItems: 'center',  
                    textAlign: "center",
                    paddingTop: 40,
                    backgroundColor: "#53B175",
                    paddingBottom: 15
                    }}>
      <Text style={{ color: 'white', fontSize:18}}>Mon casier</Text>
    </View>

            <View style = {{flexDirection: 'row', margin: 10}}>
              <Text  style={{flex: 1, fontSize:20, }}>
                Votre panier : 
              </Text>
              <Text style={{textAlign: 'right', flex: 1, fontSize:20}}>100€</Text>
            </View>
            
       <View>   
      <Overlay overlayStyle = {{height:'60%', width:'80%',borderRadius:10, padding:-10}}
        isVisible={isVisible}
        onBackdropPress={() => { setIsVisible(false) }} 
      >
        
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center',
         justifyContent: 'center',
         backgroundColor:'#53B175', borderTopLeftRadius:10, borderTopRightRadius:10}}>
          <Text style={{ color: 'white', fontSize:25, margin:5 }}>Je choisis mon locker</Text>
          </View>  
          
            <CheckBox     
          title=" La ferme des 4 étoiles montante du dev - 2 rue des retrouvailles, 75020 Paris" 
          checked={ferme1}
              onPress={() => setFerme1(!ferme1)} 
        />
        <CheckBox
          title="La ferme de la Couturière Elodie - 84 bd de la ferme, 75011 Paris" 
          checked={ferme2}
              onPress={() => setFerme2(!ferme2)} 
        />
        <CheckBox
          title="La ferme de Renaud - 32 rue de la paix, 75009 Paris" 
          checked={ferme3}
              onPress={() => setFerme3(!ferme3)}  
        />
        <CheckBox
          title="La Ferme ouverte de Boramy - 16 bd de courcelle, 75017 Paris"
          checked={ferme4}
              onPress={() => setFerme4(!ferme4)}
        />
        <CheckBox
          title="La ferme du Vilain Amour - 2 rue de paris 75005 Paris"
          checked={ferme5}
              onPress={() => setFerme5(!ferme5)}
        />
        
        
        </ScrollView>
        
          <Button
            title="Confirmer"
            buttonStyle={{ backgroundColor: '#53B175', borderRadius: 10 }}
                containerStyle={{
                  marginHorizontal: 70,
                  marginVertical: 10,
                  alignItems: 'center', 
                  justifyContent: 'center'}}
          />
        
      </Overlay>
      </View>

      <MapView 
        onPress={() => { setIsVisible(!isVisible) }}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 48.866667,
          longitude: 2.333333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >


        <Marker key={"currentPos"}
          pinColor="red"
          title="Hello"
          description="I'am here"
          coordinate={{ latitude: currentLatitude, longitude: currentLongitude }}
        />
        <Marker key={"currentPos1"}
          pinColor="blue"
          title={lockers}
          //description="part ici houhouuu, choisit nous stp"
          //coordinate={latitude} {longitude}
        />
        
        {markerPOI}

      </MapView>


            <View style={{margin:-10}}>
            
              <CheckBox 
              title='Credit/ Debit Card'
              checked={credit}
              onPress={() => setCredit(!credit)}/>
              <CheckBox 
              title='Paypal'
              checked={paypal}
              onPress={() => setPaypal(!paypal)}/>
              <CheckBox 
              title='Gpay :  Credit/ Debit Card'
              checked={gpay}
              onPress={() => setGpay(!gpay)}/>
        </View>
        
             <Button
                title="Valider ma commande"
                buttonStyle={{ backgroundColor: '#53B175', borderRadius: 10, margin: 30, marginVertical: 10}}
                 
                onPress={() => props.navigation.navigate("Error")}
              />
        
        
    </View>
  );
}
