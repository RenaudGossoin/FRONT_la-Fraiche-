import { View, Image, StyleSheet, ScrollView } from "react-native";

import { Text, Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

export default function BasketScreen(props) {
  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }}>
      <Text style={styles.title}>Mon Panier</Text>

      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            style={{ resizeMode: "contain", height: 50, width: 100 }}
            source={require("../assets/abricots.png")}
          />
        </View>
        <View style={styles.block}>
          <Text style={{ fontWeight: "bold", paddingBottom: 3 }}>Abricots</Text>
          <Text style={styles.element}> 1kg, 2.30 €</Text>
          <View style={styles.blockbutton}>
            <Button
              title="-"
              color="gray"
              buttonStyle={styles.button}
              type="outline"
              titleStyle={{ color: "#636e72" }}
              containerStyle={{
                marginRight: 10,
              }}
              onPress={() => console.log("add : click réussi")}
            />
            <Text>1</Text>
            <Button
              title="+"
              color="gray"
              buttonStyle={styles.button}
              type="outline"
              titleStyle={{ color: "#636e72" }}
              containerStyle={{
                marginLeft: 10,
              }}
              onPress={() => console.log("minus: click réussi")}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            title="x"
            color="gray"
            buttonStyle={styles.button}
            type="outline"
            titleStyle={{ color: "#636e72" }}
            containerStyle={{
              marginRight: 10,
            }}
            onPress={() => console.log("delete: click réussi")}
          />
          <Text style={{ paddingTop: 10 }}>2.30€ </Text>
        </View>
      </View>

      <View style={styles.block2}>
        <Text>Frais de port</Text>
        <Text style={{ paddingLeft: 80 }}>30 €</Text>
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
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          buttonStyle={{ borderRadius: 10, backgroundColor: "#53B175" }}
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
          <Text style={{ paddingTop: 5 }}> 100 €</Text>
        </View>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    paddingTop: 40,
    backgroundColor: "#53B175",
    paddingBottom: 15,
    fontSize: 18,
    color: "#ffffff",
  },
  block: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  element: {
    paddingBottom: 5,
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
    borderRadius: 7,
    paddingBottom: 2,
    paddingTop: 2,
  },
  block2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
});
