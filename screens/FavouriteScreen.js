import React from "react";
import { View, Text, StyleSheet, Image, Button, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";

const FavouriteScreen = (props) => {

//////MAP FavArray////////
  const FavArray = props.saveFavourite.map((item, _id) => {
    return (
      <View key={item._id} style={{flexDirection:"row", flex:1}}>
        <View style={{ flex: 1, alignItems: "center" }}>

          <Image
            style={{ resizeMode: "contain", height: 50, width: 100 }}
            source={{ uri: item.img }}
          />
        </View>
        <View style={styles.block}>
          <Text style={{ fontWeight: "bold", paddingBottom: 3 }}>
            {item.nom}
          </Text>
          <Text style={styles.element}>
            {item.mesurement}
          </Text>
        </View>
        <View style={{alignItems:"flex-end", flex:1, justifyContent:"center"}}>
          <Text style={{fontWeight:"bold"}}>
          {item.prix} €
          </Text>

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
            type="outline"
            titleStyle={{ color: "#636e72" }}
            containerStyle={{
              marginRight: 10,
            }}
            //onPress={() => props.onDeleteArticle(item)}
          />
        </View>
      </View>
    );
  });

  return (
    <SafeAreaView>
    <ScrollView>
       <View style={{alignItems:"center", height:100, justifyContent:"center", borderBottomColor:"#000000"}}>
      <Text style={{fontWeight:"bold", fontSize:18,}}>Mes Favoris</Text>
    </View>
    <View>
 {FavArray}
    </View>
    </ScrollView>
    </SafeAreaView>

  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});

function mapStateToProps(state) {
  return {
    saveToken: state.saveToken,
    saveFavourite: state.saveFavourite
  };
}

export default connect(mapStateToProps, null)(FavouriteScreen);
