import { useState } from 'react';

import FormInput from '../../components/Layout/forminput.component';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase';
import styles from '../../styles/authentication.module.css';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/Layout/button-auth';



const defaultformFields = {
    email: '',
    password: '',
}

console.log(defaultformFields);


const SignInForm = () => {
    const [formFields, setformFields] = useState(defaultformFields);
    const { email, password } = formFields;


    const resetFormFields = () => {
        setformFields(defaultformFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();

    };

    const handleSubmit = async (event) => {
        event.preventDefault();
       

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();


        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    alert("No account found with this email. Please sign up first!");
                    break;

                case 'auth/wrong-password':
                    alert("Incorrect password for email.");
                    break;

                default:
                    console.log(error);
            };
        };
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setformFields({ ...formFields, [name]: value });
    };


    return (
        <div className={styles.signincontainer}>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email} />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password} />

                <div className={styles.buttonscontainer}>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
};

export default SignInForm;