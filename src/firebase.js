// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKlPI92OUkQL03AxbWTkHsHW9qiG00F6o",
  authDomain: "pf-henry-16edc.firebaseapp.com",
  projectId: "pf-henry-16edc",
  storageBucket: "pf-henry-16edc.appspot.com",
  messagingSenderId: "354096370782",
  appId: "1:354096370782:web:7a5c50a6ed69defebe10cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
