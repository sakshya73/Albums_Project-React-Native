import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Cardsection = props => {
  return <View style={Styles.container}>{props.children}</View>;
};
const Styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    borderColor: "#ddd",
    position: "relative",
    flexDirection: "row"
  }
});
export default Cardsection;
