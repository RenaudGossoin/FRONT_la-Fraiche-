import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

const FavouriteScreen = (props) => {
  console.log(props.token);
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
  return { token: state.token };
}

export default connect(mapStateToProps, null)(FavouriteScreen);
