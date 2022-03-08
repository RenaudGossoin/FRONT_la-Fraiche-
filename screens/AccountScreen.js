import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Button,
  ListItem,
  Icon,
  Text,
  Content,
} from "react-native-elements";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { connect } from "react-redux";



function AccountScreen(props) {
  const [expanded, setExpanded] = useState("");
  console.log(props.token);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          margin: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons name="human-greeting" size={50} color="black" />
        <View>
          <Text style={{ fontSize: 20, fontWeight:'bold' }}>Steevie Wonder</Text>
          <Text style={{ fontSize: 15, flexDirection: "row" }}>
            s.wonder@gmail.com
          </Text>
        </View>
      </View>

      <ListItem.Accordion
        content={
          <>
            <Icon name="shopping-bag" size={30} color="black" />
            <ListItem.Content>
              <ListItem.Title style={{ fontSize: 20, marginLeft: 10 }}>
                Mes commandes
              </ListItem.Title>
                      
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
          
        }}
        
        
      ></ListItem.Accordion>

      <Button
        title="Déconnexion"
        onPress={() => props.navigation.navigate('SignIn')}
        buttonStyle={{
          backgroundColor: "#53B175",
          borderRadius: 10,
          margin: 30,
          marginVertical: "95%",
          alignItems: "center",
        }}
      />
    </View>
  );
}

/*const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });    */

function mapStateToProps(state) {
  return { token: state.token };
}

export default connect(mapStateToProps, null)(AccountScreen);
