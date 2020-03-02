import firebase from "firebase/app";
import "firebase/firestore";
require("dotenv").config();
const creds = require("./cred");
const fireBaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAdQlcCgySbw51noBRgR-rTnZ4GRDr5Pfk",
    authDomain: "todoist-clone-b7273.firebaseapp.com",
    databaseURL: "https://todoist-clone-b7273.firebaseio.com",
    projectId: "todoist-clone-b7273",
    storageBucket: "todoist-clone-b7273.appspot.com",
    messagingSenderId: "549203304955",
    appId: "1:549203304955:web:a7204a4ebf85ffcb976b5e",
    measurementId: "G-L3168BCSBY"
});

export {fireBaseConfig as firebase};