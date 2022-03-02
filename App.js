import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import DropShadow from "react-native-drop-shadow";
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from "./screens/HomeScreen";
import AccountScreen from './screens/AccountScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import BasketScreen from './screens/BasketScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from "./screens/SignUpScreen";
import LockerScreen from './screens/LockerScreen';
import ProductScreen from './screens/ProductScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name == 'Categories') {
            iconName = 'home';
          } else if (route.name == 'Account') {
            iconName = 'user';
          }else if (route.name == 'Favourite') {
            iconName = 'heart';
          }else if (route.name == 'Basket') {
            iconName = 'shopping-basket';
          }
          return <FontAwesome name={iconName} size={24} color={color} />;
        },
        })}

      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#404040',
        inactiveTintColor: '#A6A6A6',
        style: {
          backgroundColor: '#D9D9D9',
        marginTop:20,
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        }
      }}
    >
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="Basket" component={BasketScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (

<NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignIn" component={LogInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Locker" component={LockerScreen} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator}/>
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}

