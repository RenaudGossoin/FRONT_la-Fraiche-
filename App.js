//import { StatusBar } from "expo-status-bar";
//import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect} from 'react';


//redux
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import saveDepartement from "./reducers/saveDepartement";
import saveCount from "./reducers/saveCount";
import saveToken from "./reducers/saveToken";
import saveCategorie from "./reducers/saveCategorie";
import saveDetailArticle from "./reducers/saveDetailArticle";
import saveBasket from "./reducers/saveBasket";
// import addtoFavlist from "./reducers/addtoFavlist";


import { StripeProvider } from '@stripe/stripe-react-native';

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import DropShadow from "react-native-drop-shadow";
import { FontAwesome } from "@expo/vector-icons";

//différents Screens
import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/AccountScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import BasketScreen from "./screens/BasketScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import LogInScreen from "./screens/LogInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LockerScreen from "./screens/LockerScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";
import SuccessScreen from "./screens/SuccessScreen";
import ErrorScreen from "./screens/ErrorScreen";
import PaymentScreen from "./screens/PaymentScreen";



//navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//redux
const store = createStore(
  combineReducers({
    saveDepartement,
    saveCount,
    saveToken,
    saveCategorie,
    saveDetailArticle,
    saveBasket,
    
  })
);

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name == "Categories") {
            iconName = "home";
          } else if (route.name == "Account") {
            iconName = "user";
          } else if (route.name == "Favourite") {
            iconName = "heart";
          } else if (route.name == "Basket") {
            iconName = "shopping-basket";
          }
          return <FontAwesome name={iconName} size={24} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#404040",
        inactiveTintColor: "#A6A6A6",
        style: {
          //backgroundColor: '#D9D9D9',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      }}
    >
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="Basket" component={BasketScreen} />
    </Tab.Navigator>
  );
};

export default function App() {

  // const [favoriteArticlesList, setFavoriteArticlesList] = useState([]);
  // const [articleList, setarticleList] = useState([])

  const [publishableKey, setPublishableKey] = useState('');

  const fetchPublishableKey = async () => {
    const key = await fetchKey(); // fetch key from your server here
    setPublishableKey(key);
  };

  useEffect(() => {
    fetchPublishableKey();
  }, []);
  return (
    
    
    <StripeProvider
      publishableKey="pk_test_51KHmtoJkO5eJfiDA1YzBXZXfQrBGZvhkr4lCgKUv6PiVOBpKbPFVYcEHkgBkDQS5zTYkoIc7qMiBcDVdkx9BYzsg00VrPLP3Lh"
      urlScheme="https://lafraiche.herokuapp.com/" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{la fraiche}}" // required for Apple Pay
    >
      
    <Provider store={store}>

   
    
     <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SignIn" component={LogInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Locker" component={LockerScreen} />
          <Stack.Screen name="Success" component={SuccessScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
          <Stack.Screen name="Error" component={ErrorScreen} />
          <Stack.Screen name="Product" component={ProductScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Favorites" component={FavouriteScreen} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
    </StripeProvider>
    
  );
}

