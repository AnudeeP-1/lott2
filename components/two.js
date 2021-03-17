import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as firebase from 'firebase';

export default class two extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
          padding: 50,
        }}
      >
        <Text>Hey tehere</Text>
      </View>
    );
  }
}
