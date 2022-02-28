import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const BasketScreen = () => {
    return (
<View style={styles.container}>
<Text>BasketScreen</Text>
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
    
export default BasketScreen;