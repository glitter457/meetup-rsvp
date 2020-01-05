import React, { Component } from "react";
//import react in our code.
import { StyleSheet, View, Text, TextInput } from "react-native";
// import all basic components

export default class Screen1 extends Component {
  //Screen1 Component
  render() {
    return <View style={styles.MainContainer}></View>;
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    marginTop: 50,
    justifyContent: "center"
  }
});
