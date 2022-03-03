<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//redux
import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';
import saveDepartement from './reducers/saveDepartement';


//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
>>>>>>> e672177c96c61ce33cb99339bb86e9fd03229f98

import DropShadow from "react-native-drop-shadow";
import { FontAwesome } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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

//navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//redux
const store = createStore(combineReducers({saveDepartement}));

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
<<<<<<< HEAD
          backgroundColor: "#D9D9D9",
          marginTop: 20,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
=======
          //backgroundColor: '#D9D9D9',
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        }
>>>>>>> e672177c96c61ce33cb99339bb86e9fd03229f98
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
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Locker" component={LockerScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Error" component={ErrorScreen} />
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
=======

    <Provider store={store}>

<NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignIn" component={LogInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Locker" component={LockerScreen}/>
      <Stack.Screen name="Success" component={SuccessScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Error" component={ErrorScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator}/>
    </Stack.Navigator>
  </NavigationContainer>

  </Provider>

>>>>>>> e672177c96c61ce33cb99339bb86e9fd03229f98
  );
}
