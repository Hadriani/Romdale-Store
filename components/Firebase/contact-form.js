import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
import { Firestore } from "../../utils/firebase.contactus";

export const sendContactForm = async ({ name, email, comment }) => {
    try {
        const ref = collection(Firestore, "contact");
        await addDoc(ref, {
            name,
            email,
            comment,
            sentAt: Timestamp.now().toDate(),
        });
        return 0;
    } catch (err) {
        console.log(err)
        return -1;
    }
};