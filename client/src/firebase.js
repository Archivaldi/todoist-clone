import firebase from "firebase/app";
import "firebase/firestore";
require("dotenv").config();
const creds = require("./cred.js");

const fireBaseConfig = firebase.initializeApp(creds.creds);

export {fireBaseConfig as firebase};