import React from "react";
import styles from "../../styles/authentication.module.css";
import { useState } from "react";

const FormInput = ({ label, ...otherProps }) => {

    const [focused, setFocused] = useState(false);

    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);

    return (
        <div className={styles.Group}>
            <input 
            className={styles.Input} 
            {...otherProps} 
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {label && (
                <div
                    className={`${styles.FormInputLabel} ${focused || otherProps.value.length ? styles.shrink : ""}`}
                >
                    {label}
                </div>
            )}
        </div>
    );
};

export default FormInput; 