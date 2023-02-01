import { useState } from 'react';

import FormInput from '../../components/Layout/forminput.component';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase';

import styles from '../../styles/authentication.module.css';

import Button from '../../components/Layout/button-auth';

const defaultformFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

console.log(defaultformFields);


const SignUpForm = () => {
    const [formFields, setformFields] = useState(defaultformFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setformFields(defaultformFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }

            console.log('user creation encountered an error', error);

        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setformFields({ ...formFields, [name]: value });
    };

    return (
        <div className={styles.signupcontainer}>
            <h2>Do you have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    type='text'
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName} />

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

                <FormInput
                    label='Confirm Password'
                    type='password'
                    required onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword} />
                <Button buttonType='inverted' type='submit'>
                    Create Account
                </Button>
            </form>
        </div>
    )
};

export default SignUpForm;