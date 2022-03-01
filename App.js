import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from "./screens/HomeScreen";
import AccountScreen from './screens/AccountScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import BasketScreen from './screens/BasketScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import LockerScreen from './screens/LockerScreen';

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
        activeTintColor: '#009788',
        inactiveTintColor: '#FFFFFF',
        style: {
          backgroundColor: '#111224',
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
      <Stack.Screen name="BottomNavigator" component={BottomNavigator}/>
    </Stack.Navigator>
  </NavigationContainer>

  );
}

