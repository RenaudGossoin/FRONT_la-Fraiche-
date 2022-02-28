import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';

const HomeScreen = (props) => {
    return (
<View style={styles.container}>
<Text>HomeScreen</Text>
<Button title="Go page Categories"
       onPress={() => props.navigation.navigate('BottomNavigator', {screen: 'Categories'})}
     />
</View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });    
    
export default HomeScreen;