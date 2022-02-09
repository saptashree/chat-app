import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBs0CYJOlKtn8WegIigl_3t_7TVU4OwVUg",
    authDomain: "uniquechat-2645d.firebaseapp.com",
    projectId: "uniquechat-2645d",
    storageBucket: "uniquechat-2645d.appspot.com",
    messagingSenderId: "512438905649",
    appId: "1:512438905649:web:b639c26dd1133aaadfde10"
  }).auth();