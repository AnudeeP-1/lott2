import React, { Component } from "react";
import CardFlip from "react-native-card-flip";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import Background from "../components/Background";

export default class Card1 extends Component {
    constructor(props){
        super();
    }
  render() {
    return (
      <View style={styles.container}>
        <Background>
          <CardFlip
            style={styles.cardContainer}
            ref={(card) => (this.card = card)}
          >
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.card, styles.card1]}
              onPress={() => this.card.flip()}
            >
              <Text style={styles.label}>AB</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.card, styles.card2]}
              onPress={() => this.card.flip()}
            >
              <Text style={styles.label}>CD</Text>
            </TouchableOpacity>
          </CardFlip>

          <Button
            mode="contained"
            onPress={()=> this.props.navigation.navigate("Card2")}
            style={{ marginTop: 16 }}
          >
           Go to Card2
          </Button>
        </Background>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  cardContainer: {
    width: 320,
    height: 470,
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: "#FE474C",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: "#FE474C",
  },
  card2: {
    backgroundColor: "#FEB12C",
  },
  label: {
    lineHeight: 470,
    textAlign: "center",
    fontSize: 55,
    fontFamily: "System",
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});
