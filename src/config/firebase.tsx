import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { config } from "./config";

const Firebase = firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore(Firebase);
export default Firebase;
