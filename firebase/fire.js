import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBDLWX4VKQQ3E83EFkjpvm-fMqFrupoA20",
  authDomain: "rn-auth-3c051.firebaseapp.com",
  projectId: "rn-auth-3c051",
  storageBucket: "rn-auth-3c051.appspot.com",
  messagingSenderId: "419125392151",
  appId: "1:419125392151:web:5c2902f39a0433ef1ffd52",
  measurementId: "G-PHJ9VS9WGY",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
