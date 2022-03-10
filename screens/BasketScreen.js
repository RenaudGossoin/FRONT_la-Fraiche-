import { useEffect, useState } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";

import { Text, Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";


function BasketScreen(props) {
  //console.log("basket", props.saveToken);
  //console.log("basket", props.saveBasket);

  useEffect(() => {
    const basketUpdate = async () => {};

    basketUpdate();
    //console.log(departement+" from UseEffect")
  }, [props.saveBasket]);

  //console.log("useeff", props.saveOrder);
  //console.log(props.saveBasket.length);
  

console.log(props.saveBasket)

var welcome;
  if (props.saveToken) {
    welcome = `Bienvenue ${userInfo}`;
  } else {
    welcome = "Bienvenue sur La Fraîche";
  }

const goBack = () =>
    props.navigation.navigate("BottomNavigator", { screen: "Categories" });


  const basketArray = props.saveBasket.map((item, _id) => {
    return (
      <View key={item._id} style={styles.container}>
        <View style={{ flex: 1, alignItems: "center", borderRightWidth:2, borderColor:"#ffffff"}}>
          
          <Image
            style={{ resizeMode: "contain", height: 50, width: 100, color: "gray" }}
            source={{ uri: item.img }}
          />
        </View>
        <View style={styles.block}>
          <Text style={{ fontWeight: "bold", paddingBottom: 1, paddingLeft:5 }}>
            {item.nom}
          </Text>
          <Text style={styles.element}>
            {/* {" "} */}
            {item.mesurement}
            {/* {parseInt(item.prix)} €  */}
          </Text>
          <View style={styles.blockbutton}>

          <Ionicons name="remove-circle" size={32} color="#006D24"   style={{ marginRight: 10,}}
onPress={() => props.onDecreaseQuantity(item)}

          />
            {/* <Button
              title="-"
              color="gray"
              buttonStyle={styles.button}
              type="outline"
              titleStyle={{ color: "#636e72" }}
              containerStyle={{
                marginRight: 10,
              }}
              //onPress={() => decreaseQuantity()}
              onPress={() => props.onDecreaseQuantity(item)}

            /> */}
            <Text style={{fontWeight:"bold"}}>{item.quantity}</Text>
            <Ionicons name="add-circle" size={32} color="#006D24"   style={{ marginLeft: 10,}}
              onPress={() => props.onIncreaseQuantity(item)}

          />
            {/* <Button
              title="+"
              buttonStyle={styles.button}
              type="outline"
              titleStyle={{ color: "#636e72" }}
              containerStyle={{
                marginLeft: 10,
              }}
              onPress={() => props.onIncreaseQuantity(item)}
            /> */}
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Ionicons name="md-close-circle-outline" size={32} color="#006D24"   style={{ paddingLeft:15, alignItems:"flex-end",}}
            onPress={() => props.onDeleteArticle(item)}
            />

          {/* <Button
            title="x"
            color="gray"
            buttonStyle={styles.button}
            type="outline"
            titleStyle={{ color: "#636e72" }}
            containerStyle={{
              marginRight: 10,
            }}
            onPress={() => props.onDeleteArticle(item)}
          /> */}
          <Text style={{ paddingTop: 10, fontWeight:"bold" }}>{Math.round(item.prix*item.quantity*100)/100} €</Text>
        </View>
      </View>
    );
  });

  var noArticles;
  if (props.saveBasket.length == 0) {
    noArticles = "votre panier est vide";
  }
  else if(props.saveBasket.length == 1){
  noArticles = props.saveBasket.length  + " article dans votre panier"
  }else{
    noArticles = props.saveBasket.length  + " articles dans votre panier"
    }

  // METHODE REDUCE
  var total=props.saveBasket.reduce((p, c) => p+c.prix*c.quantity, 0);
  const fdp=3
  let totalFdp=total+fdp
  let totalOk=totalFdp.toFixed(2)

 console.log((total.toFixed(2))); 

  return (
    <View style={{ /*flex: 1,*/ backgroundColor: "#ffffff", marginBottom: 70 }}>
    <View style={styles.TopBar}>
    <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color="#000000"
            onPress={goBack}
          />
<Text style={{fontWeight:"bold", fontSize:16, color:"#737373"}}>{welcome}</Text>

</View>
    <ScrollView style={{ backgroundColor: "#ffffff", }}>
      <Text style={{ marginTop: 20, fontSize: 16, fontWeight:"bold", marginBottom:20, textAlign:"center" }}>{noArticles}</Text>

      {basketArray}

      <View style={styles.block2}>
        <Text style={{fontWeight:"bold", color:"#006D24"}}>Frais de port</Text>
        <Text style={{ paddingLeft: 80, fontWeight:"bold", color:"#006D24" }}>{fdp} €</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Button
          title={"Valider mon panier"}
          containerStyle={{
            marginTop: 30,
            marginHorizontal: 20,
            marginVertical: 10,
          }}
          buttonStyle={{ width:200, borderRadius: 20, backgroundColor: "#006D24" }}
          onPress={() => props.navigation.navigate("Locker")}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", paddingTop: 10 }}>
            Total panier
          </Text>
          <Text style={{ paddingTop: 5, fontWeight: "bold", color:"#006D24" }}> {totalOk}€</Text>
        </View>
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  TopBar:{
    flexDirection:"row",
    paddingHorizontal:25,
    paddingBottom:20,
    //flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"flex-end",
    backgroundColor:"#ffffff",
    height:120,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth:1,
    borderColor:"#fff",
  },
  title: {
    textAlign:"center",
    paddingTop: 40,
    backgroundColor: "#53B175",
    paddingBottom: 15,
    fontSize: 18,
    color: "#ffffff",
  },
  block: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft:20,
  },
  element: {
    paddingLeft:5,
       paddingBottom: 3,
    fontSize: 13,
    color: "gray",
    marginBottom: 4,
  },
  blockbutton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    borderColor: "#636e72",
    borderRadius: 30,
    paddingBottom: 1,
    paddingTop: 1,
  },
  block2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 0,
    paddingVertical:15,
    backgroundColor:"#A2D7B4"
  },
});

function mapDispatchToProps(dispatch) {
  return {
    onDeleteArticle: function (article) {
      dispatch({ type: "deleteArticle", article });
    },
onIncreaseQuantity: function (article){
  dispatch({type: "increaseQuantity", article})
},
onDecreaseQuantity: function (article){
  dispatch({type: "decreaseQuantity", article})
}
  };
}

function mapStateToProps(state) {
  return {
    saveToken: state.saveToken,
    saveBasket: state.saveBasket,

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketScreen);
