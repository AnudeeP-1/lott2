import React, { useState } from "react";
import { Text, Input, Button, View } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../firebase/fire";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

 
  var emailSent = false;

  const signUp = async () => {
    const actionCodeSettings = {
      url: "https://192.168.43.71:19006",
      handleCodeInApp: true,
    };
    try {
      await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      emailSent = true;
    } catch (err) {
      this.errorMessage = err.message;
    }

    try {
      if (firebase.auth().isSignInWithEmailLink(url)) {
        let email = window.localStorage.getItem("emailForSignIn");

        // If missing email, prompt user for it
        if (!email) {
          email = window.prompt("Please provide your email for confirmation");
        }

        // Signin user and remove the email localStorage
        const result = await firebase.auth().signInWithEmailLink(email, url);
        navigation.navigate('Home');
        window.localStorage.removeItem("emailForSignIn");
      }
    } catch (err) {
      this.errorMessage = err.message;
    }
  };

  return (
    <>
      <Input label="Email" value={email} onChangeText={setEmail} />
      
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
      <Button title="SignUp" onPress={() => signUp()} />
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text>Alredy have?</Text>
      </TouchableOpacity>
    </>
  );
};

export default Login;
