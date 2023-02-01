import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCQ8bosbCWKJkq6y7X27-wNMKRrcD6GAhk",
    authDomain: "romdale-branded.firebaseapp.com",
    projectId: "romdale-branded",
    storageBucket: "romdale-branded.appspot.com",
    messagingSenderId: "373212963487",
    appId: "1:373212963487:web:89471a98a7210e5db7f8aa",
    measurementId: "G-VS04NE25SD"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

db.collection("products").doc("TCUrvDiwIOJ3hufNTX9U").update({
    ratings: firebase.firestore.FieldValue.arrayUnion(rating)
});

db.collection("reviews").doc("AtwQvlzS0Ve3OGNEvK4C").update({
    reviews: firebase.firestore.FieldValue.arrayUnion(reviewsRef)
});

const batch = db.batch();
const reviewsRef = db.collection("reviews").doc();
const productRef = db.collection("products").doc("TCUrvDiwIOJ3hufNTX9U");
batch.set(reviewsRef, { rating: rating, productId: productId });
batch.update(productRef, { reviews: firebase.firestore.FieldValue.arrayUnion(reviewsRef) });
batch.commit();