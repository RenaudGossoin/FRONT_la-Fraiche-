import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

//Mettre les 2 lignes de script dessous juste avant la fermeture du body pour utiliser l'icone
// <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
//<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>


const ProductScreen = () => {
    return (
      <>
      <ScrollView>
        <View style={styles.body}>
            <View style={styles.bigtitle}></View>
            
              <View style={styles.container}>
                  <Card containerStyle={styles.product}>
                  {/* <ion-icon name="heart-outline"></ion-icon> */}
                  <Card.Image
                      style={styles.image}
                      source={require('../assets/cat-fruits.png')}
                      />
                  <View style={styles.textdetails}>
                    <Text>Titre</Text>
                    <Text>Prix €</Text>
                  </View>
                  <Text>quantite</Text>

                  <Button title='détails' />

                  </Card>
              </View>
        </View>

        
      </ScrollView>
      </>

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
    
export default ProductScreen;