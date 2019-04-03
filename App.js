import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/header";
import Albumlist from "./src/components/Albumlist";
export default class App extends Component {
  render() {
    return (
      <View style={Styles.main}>
        <Header style={Styles.header} textdisplay={"Albums"} />
        <Albumlist />
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  main: {
    flex: 1
  },
  header: {}
});
