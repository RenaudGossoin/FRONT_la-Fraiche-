import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

const FavouriteScreen = (props) => {
  //console.log("favourite",props.saveToken);
  return (
    <View style={styles.container}>
      <Text>FavouriteScreen</Text>
    </View>
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
  return { saveToken: state.saveToken };
}

export default connect(mapStateToProps, null)(FavouriteScreen);
