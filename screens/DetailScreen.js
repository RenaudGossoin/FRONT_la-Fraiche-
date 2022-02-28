import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const DetailScreen = () => {
    return (
        <View style={styles.container}>
        <Text>DetailScreen</Text>
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
    
export default DetailScreen;