import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class three extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <View >
        <Text>This is three.js</Text>
        <Button
          title="Go to One"
          onPress={() => this.props.navigation.navigate('One')}
        />
      </View>
    );
  }
}
