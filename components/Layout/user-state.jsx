import React, { useEffect, useState } from 'react';
import { onAuthStateChangedListener, signOutUser } from '../../utils/firebase';
import styles from '../../styles/authentication.module.css';

const UserState = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [showSignInButton, setShowSignInButton] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user);
            if (user) {
                setShowSignInButton(true);
                alert("You are now successfully signed in!");
            } else {
                setShowSignInButton(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleSignOut = async () => {
        try {
            await signOutUser();
            console.log('Signed out successfully');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.userstateheader}>
            {currentUser ? (
                <>
                    <span className={styles.labelheader}>Welcome, {currentUser.displayName}</span>
                    <button className={styles.buttonsign} onClick={handleSignOut}>Sign Out</button>
                </>
            ) : (
                <>
                    <span className={styles.labelheader}>Welcome, Guest</span>
                    { showSignInButton && <button>Sign In</button> }
                </>
            )}
        </div>
    );
};

export default UserState;