import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import One from "./components/one";
import Two from "./components/two";
import Three from "./components/three";
import StartScreen from "./src/screens/StartScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import Dashboard from "./src/screens/Dashboard";
import Card1 from "./src/screens/Card1";
import Card2 from "./src/screens/Card2";
import Login from "./signIneg/Login";
import SignIn from "./signIneg/SignIn";
import Home from "./signIneg/Home";
import PasswordLess from "./signIneg/PasswordLess";
import Phone from "./signIneg/PhoneSignIn";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          // screenOptions={{
          //   headerShown: false,
          // }}
        >
          {/* <Stack.Screen name="One" component={One} />
          <Stack.Screen name="Two" component={Two} />
          <Stack.Screen name="Three" component={Three} />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Card1" component={Card1} />
          <Stack.Screen name="Card2" component={Card2} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="PasswordLess" component={PasswordLess} /> */}
          <Stack.Screen name="Phone" component={Phone} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
