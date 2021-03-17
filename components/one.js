import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import LottieView from "lottie-react-native";

export default class One extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
        }}
      >
        <LottieView
          source={require("../assets/splash.json")}
          autoPlay
          loop={false}
          speed={0.5}
          onAnimationFinish={()=>{
              this.props.navigation.navigate('StartScreen')
          }}
        />
      </View>
    );
  }
}
