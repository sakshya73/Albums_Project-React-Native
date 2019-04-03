import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={Styles.touch} onPress={onPress}>
      <Text style={Styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  touch: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default Button;
