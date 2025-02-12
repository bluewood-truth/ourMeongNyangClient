import firebase from "firebase/app";
import "firebase/storage";
// import dotenv from "dotenv";

// dotenv.config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance: typeof firebase = firebase;
export const storageService: firebase.storage.Storage = firebase.storage();
