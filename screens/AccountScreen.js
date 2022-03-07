import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  Button,
  ListItem,
  Icon,
  Text,
  Accordion,
  Content,
  Image,
  Overlay,
} from "react-native-elements";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { connect } from "react-redux";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";

function AccountScreen(props) {
  //console.log("account", props.saveToken);
  const [expanded, setExpanded] = useState("");
  const [userUsername, setUserUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [orderInfo, setOrderInfo] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const findAccount = async () => {
      if (props.saveToken) {
        const data = await fetch(
          `https://lafraiche.herokuapp.com/account?token=${props.saveToken}`
        );

        const body = await data.json();
        console.log("bodyaccount", body);
        setUserUsername(body.info[0].username);
        setUserEmail(body.info[0].email);
        setOrderInfo(body.orders);
      }
    };

    findAccount();
  }, []);

  //console.log("username", userUsername);
  // console.log("usermail", userEmail);
  //console.log("orders", orderInfo);

  var selectOrder = () => {
    setIsVisible(true);
  };

  var orderList = orderInfo.map((order, i) => {
    return (
      <ListItem key={i} bottomDivider>
        <Avatar source={require("../assets/panier.png")} />
        <ListItem.Content
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <ListItem.Title>Commande {order.OrderNumber}</ListItem.Title>
          <ListItem.Subtitle>{order.totalOrder}€</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron
          color="red"
          onPress={() => {
            selectOrder();
          }}
        />
      </ListItem>
    );
  });

  return (
    <View>
      <Overlay
        isVisible={isVisible}
        onBackdropPress={() => {
          setIsVisible(false);
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text containerStyle={{ marginBottom: 50, padddingBottom: 10 }}>
            Votre code-barre à scanner
          </Text>

          <Image
            style={{
              height: 60,
              width: 120,
              MarginTop: 50,
              resizeMode: "contain",
            }}
            source={require("../assets/codebarre.png")}
          />
        </View>
      </Overlay>
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
          <Text style={{ fontSize: 20 }}> {userUsername}</Text>
          <Text style={{ fontSize: 15, flexDirection: "row" }}>
            {userEmail}
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
      >
        {orderList}
      </ListItem.Accordion>

      <Button
        title="Déconnexion"
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
  return { saveToken: state.saveToken };
}

export default connect(mapStateToProps, null)(AccountScreen);
