import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView  } from 'react-native';
import { Overlay, Input, CheckBox, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';


import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

<<<<<<< HEAD
export default function LockerScreen() {
=======
export default function Lockers() {
>>>>>>> lockersAB

  const [alignSelf, setAlignSelf] = useState("flex-end");
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

  //const [titrePOI, setTitrePOI] = useState();
  //const [descPOI, setDescPOI] = useState();

  const [tempPOI, setTempPOI] = useState();

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

  

  /*var selectPOI = (e) => {
    if (addPOI) {
      setAddPOI(false);
      setIsVisible(true);
      setTempPOI({ latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude });
    }
  }*/

  /*var handleSubmit = () => {
    setListPOI([...listPOI, { longitude: tempPOI.longitude, latitude: tempPOI.latitude, titre: titrePOI, description: descPOI }]);
    setIsVisible(false);
    setTempPOI();
    setDescPOI();
    setTitrePOI();
  }*/


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

  return (
    <View style={{ flex: 1 }} >

            <View style = {{flexDirection: 'row', margin: 10}}>
              <Text  style={{flex: 1, fontSize:20, }}>
                Votre panier : 
              </Text>
              <Text style={{textAlign: 'right', flex: 1, fontSize:20}}>100€</Text>
            </View>
            
       <View>   
      <Overlay overlayStyle = {{width: '70%', height:'70%', borderRadius:'10%', padding:-10}}
        isVisible={isVisible}
        onBackdropPress={() => { setIsVisible(false) }} 
      >
        
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center',
         justifyContent: 'center',
         backgroundColor:'#53B175', borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}>
          <Text style={{ color: 'white', fontSize:25, margin:'5%' }}>Je choisis mon locker</Text>
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
            buttonStyle={{ backgroundColor: '#53B175', borderRadius: '10px' }}
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
          title=" La ferme des 4 étoiles montante du dev"
          description="part ici houhouuu, choisit nous stp"
          coordinate={{ latitude: 48.872939393965694, longitude: 2.2701871445515867 }}
        />
        <Marker key={"currentPos2"}
          pinColor="blue"
          title="La ferme de la Couturière Elodie"
          description="Elodie notre fermière t'accueil avec des radis en bienvenue"
          coordinate={{ latitude: 48.88817952018065, longitude: 2.330182795535716 }}
        />
        <Marker key={"currentPos3"}
          pinColor="blue"
          title="La ferme de Renaud"
          description="Renaud le prénom pas la marque de voiture hein !!!"
          coordinate={{ latitude: 48.846340539193704, longitude: 2.335862530428087 }}
        />
        <Marker key={"currentPos4"}
          pinColor="blue"
          title="La Ferme ouverte de Boramy"
          description="C'est la ferme qui est ouverte, pas moi te méprend pas !"
          coordinate={{ latitude: 48.82914374967133, longitude: 2.431566206320608 }}
        />
        <Marker key={"currentPos5"}
          pinColor="blue"
          title="La ferme du Vilain Amour"
          description="choisit moi ou je vais te retrouver ... "
          coordinate={{ latitude: 48.904704768930785, longitude: 2.4037320810788603 }}
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
        
        
             <Button
                title="Valider ma commande"
                buttonStyle={{ backgroundColor: '#53B175', borderRadius: '10px' }}
                containerStyle={{
                  height: 40,
                  marginHorizontal: 50,
                  marginVertical: 10,
                  alignItems: 'center', 
                  
                  
                }}
                titleStyle={{
                  color: 'white',
                  
                }}
              />
        
        </View>
    </View>
  );
}
