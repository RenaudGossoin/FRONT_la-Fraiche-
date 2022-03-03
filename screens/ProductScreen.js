import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";

function ProductScreen(props) {
  //console.log(props.token);
  const goTo = () =>
    props.navigation.navigate("Detail", { screen: "DetailScreen" });
  return (
    <ScrollView style={styles.body}>
      <View style={styles.body}>
        <View>
          <Text style={styles.title}>Nos bons oeufs frais</Text>
        </View>

        <View style={styles.container}>
          <Card containerStyle={styles.item}>
            <Icon
              style={styles.icon}
              name="favorite"
              size={18}
              // color={plant.like ? COLORS.red : COLORS.black}
            />
            <Card.Image
              style={styles.image}
              source={require("../assets/cat-fruits.png")}
            />
            <View style={styles.textcontainer}>
              <View>
                <Text style={styles.productandprice}>Oeufs</Text>
              </View>

              <View>
                <Text style={styles.productandprice}>1,99€</Text>
              </View>
            </View>

            <Text style={styles.productquantity}>6 pièces</Text>

            <Pressable onPress={goTo} style={styles.button}>
              <Text style={styles.textbutton}>détails</Text>
            </Pressable>
          </Card>

          <Card containerStyle={styles.item}>
            <Icon
              style={styles.icon}
              name="favorite"
              size={18}
              // color={plant.like ? COLORS.red : COLORS.black}
            />
            <Card.Image
              style={styles.image}
              source={require("../assets/cat-fruits.png")}
            />
            <View style={styles.textcontainer}>
              <View>
                <Text style={styles.productandprice}>Oeufs</Text>
              </View>

              <View>
                <Text style={styles.productandprice}>1,99€</Text>
              </View>
            </View>

            <Text style={styles.productquantity}>6 pièces</Text>

            <Pressable onPress={goTo} style={styles.button}>
              <Text style={styles.textbutton}>détails</Text>
            </Pressable>
          </Card>

          <Card containerStyle={styles.item}>
            <Icon
              style={styles.icon}
              name="favorite"
              size={18}
              // color={plant.like ? COLORS.red : COLORS.black}
            />
            <Card.Image
              style={styles.image}
              source={require("../assets/cat-fruits.png")}
            />
            <View style={styles.textcontainer}>
              <View>
                <Text style={styles.productandprice}>Oeufs</Text>
              </View>

              <View>
                <Text style={styles.productandprice}>1,99€</Text>
              </View>
            </View>

            <Text style={styles.productquantity}>6 pièces</Text>

            <Pressable onPress={goTo} style={styles.button}>
              <Text style={styles.textbutton}>détails</Text>
            </Pressable>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#ffffff",
  },

  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 46 + 123,
    marginBottom: 25,
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  item: {
    width: 112,
    height: 175,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderColor: "#5375752B",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.24,
    shadowRadius: 8.32,

    elevation: 16,

    marginRight: 6,
    marginLeft: 6,
    padding: 8,
  },

  icon: {
    marginLeft: 75,
  },

  image: {
    width: 60,
    height: 60,
    marginBottom: 0,
    marginTop: 0,
    marginRight: 13,
    marginLeft: 13,
  },

  textcontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },

  productandprice: {
    fontSize: 14,
    borderColor: "#000000",
    fontWeight: "bold",
  },

  productquantity: {
    fontSize: 10,
    color: "#7C7C7C",
    marginTop: 3,
  },

  button: {
    backgroundColor: "#53B175",
    opacity: 1,
    borderRadius: 17,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 7,
    marginTop: 15,
  },

  textbutton: {
    color: "#ffffff",
    width: 50,
    fontSize: 13,
    fontWeight: "bold",
    // textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

function mapStateToProps(state) {
  return { token: state.token };
}

export default connect(mapStateToProps, null)(ProductScreen);
