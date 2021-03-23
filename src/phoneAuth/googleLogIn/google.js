import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import firebase from 'firebase';
import { Button } from 'react-native';

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    /* Config */
  });
}

WebBrowser.maybeCompleteAuthSession();

export default function App() {

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: 'Your-Web-Client-ID.apps.googleusercontent.com',
      },
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      firebase.auth().signInWithCredential(credential);
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        }}
    />
  );
}