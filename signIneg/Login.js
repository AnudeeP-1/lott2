import React, { useState } from "react";
import { Text, Input, Button, View } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../firebase/fire";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signUp = async () => {
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      navigation.navigate("SignIn");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Input label="Email" value={email} onChangeText={setEmail} />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
      <Button title="SignUp" onPress={() => signUp()} />
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text>Alredy have?</Text>
      </TouchableOpacity>
    </>
  );
};

export default Login;
