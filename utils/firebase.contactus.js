import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyCQ8bosbCWKJkq6y7X27-wNMKRrcD6GAhk",
    authDomain: "romdale-branded.firebaseapp.com",
    projectId: "romdale-branded",
    storageBucket: "romdale-branded.appspot.com",
    messagingSenderId: "373212963487",
    appId: "1:373212963487:web:89471a98a7210e5db7f8aa",
    measurementId: "G-VS04NE25SD"
};

export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);