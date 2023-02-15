import React, { useState, useRef } from "react";
import { sendContactForm } from "../Firebase/contact-form";
import styles from "../../../branded-products/styles/collections.module.css";

const Contact = () => {
    const [message, setMessage] = useState("");
    const formRef = useRef();
    const submitContact = async (e) => {
        e.preventDefault();
        console.log(e);
        const res = await sendContactForm({
            name: e.target[0].value,
            email: e.target[1].value,
            comment: e.target[2].value,
        });
        if (res == 0) {
            setMessage("Thank you for your valuable comment!");
            formRef.current.reset();
        } else {
            setMessage("Something went wrong! Please try again");
        }
    };

    return (

        <div className={styles.contactcontainer}>
            <h1 className={styles.contactusid}>
                {"Contact Us"}
            </h1>
            <div>
                <div>
                    {message}
                    <span
                        onClick={() => setMessage("")}
                    >
                        &times;
                    </span>
                </div>
                <form className={styles.formcontactid}
                    ref={formRef}
                    onSubmit={submitContact}
                >
                    <input className={styles.inputtextareaid}
                        required
                        placeholder="Name*"
                        type={"text"}
                        minLength={3}
                        maxLength={25}
                    />
                    <input className={styles.inputtextareaid}
                        required
                        placeholder="Email Address*"
                        type={"email"}
                    />
                    <textarea className={styles.inputtextareaid}
                        required
                        placeholder="Comment*"
                        rows={5}
                    ></textarea>
                    <button type="submit" className={styles.buttoncontactid}>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;