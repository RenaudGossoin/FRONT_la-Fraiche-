import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  Button,
  ListItem,
  Icon,
  Text,
  Image,
  Overlay,
} from "react-native-elements";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { connect } from "react-redux";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { Ionicons } from "@expo/vector-icons";

function AccountScreen(props) {
  const [expanded, setExpanded] = useState("");
  const [userUsername, setUserUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [orderInfo, setOrderInfo] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const goBack = () =>
    props.navigation.navigate("BottomNavigator", { screen: "Categories" });

  /*Au chargement du composant, on appelle la route account pour aller chercher les infos de l'user
  On utulise un hook d'état pour remplir son usename, infos et commandes */
  useEffect(() => {
    const findAccount = async () => {
      if (props.saveToken) {
        const data = await fetch(
          `https://lafraiche.herokuapp.com/account?token=${props.saveToken}`
        );

        const body = await data.json();

        setUserUsername(body.info[0].username);
        setUserEmail(body.info[0].email);
        setOrderInfo(body.orders);
      }
    };

    findAccount();
  }, []);

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
    <View style={{ backgroundColor: "#ffffff" }}>
      <View style={styles.TopBar}>
        <Ionicons name="person-outline" size={30} color="black" />

        <View style={{ justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 20, color: "black", marginRight: 20 }}>
            {userUsername}
          </Text>
          <Text style={{ fontSize: 15 }}>{userEmail}</Text>
        </View>
        <Image
          source={require("../assets/courge.png")}
          style={{
            position: "absolute",
            width: 160,
            resizeMode: "contain",
            top: -60,
            left: -40,
          }}
          onPress={goBack}
        />
      </View>
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
              resizeMode: "contain",
            }}
            source={require("../assets/codebarre.png")}
          />
        </View>
      </Overlay>

      <ListItem.Accordion
        content={
          <>
            <Ionicons
              name="basket-outline"
              size={30}
              color="black"
              style={{ paddingHorizontal: 20 }}
            />
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
          backgroundColor: "#006D24",
          borderRadius: 30,
          margin: 30,
          marginVertical: "95%",
          alignItems: "center",
        }}
        onPress={() => props.navigation.navigate("SignIn")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  TopBar: {
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingBottom: 20,
    //flexDirection:"column",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#FFFFFF",
    height: 120,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});

function mapStateToProps(state) {
  return {
    saveToken: state.saveToken,
    saveDetailArticle: state.saveDetailArticle,
  };
}

export default connect(mapStateToProps, null)(AccountScreen);
