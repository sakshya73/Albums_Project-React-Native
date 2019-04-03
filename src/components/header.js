import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = props => {
  return (
    <View style={Styles.headerview}>
      <Text style={Styles.headertext}>{props.textdisplay}</Text>
    </View>
  );
};
const Styles = StyleSheet.create({
  headerview: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    paddingTop: 50,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 }
  },
  headertext: {
    fontSize: 20
  }
});
export default Header;
