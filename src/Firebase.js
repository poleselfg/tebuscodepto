import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCCTZU4AYNwDo9Q2IAtP7FCR5YgXAiXLqo",
  authDomain: "tebuscodepto-6e2d7.firebaseapp.com",
  databaseURL: "https://tebuscodepto-6e2d7.firebaseio.com",
  projectId: "tebuscodepto-6e2d7",
  storageBucket: "tebuscodepto-6e2d7.appspot.com",
  messagingSenderId: "529431829851",
  appId: "1:529431829851:web:89c78363f9ff5a4f"
};

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;
