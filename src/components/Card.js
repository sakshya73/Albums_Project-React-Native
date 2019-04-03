import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const Card = props => {
  return <View style={Styles.container}>{props.children}</View>;
};

const Styles = StyleSheet.create({
  container: {
    borderColor: "#ddd",
    borderRadius: 2,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    elevation: 1
  }
});
export default Card;
