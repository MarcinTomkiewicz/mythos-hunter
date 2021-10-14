  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBQl0PBG6I7ZZsmXH9gaxxm21e5HpJc3V8",
    authDomain: "mythos-hunter-75af2.firebaseapp.com",
    projectId: "mythos-hunter-75af2",
    storageBucket: "mythos-hunter-75af2.appspot.com",
    messagingSenderId: "577680113403",
    appId: "1:577680113403:web:77f797193fb2260575fa5e"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
  export const db = firebase.firestore();