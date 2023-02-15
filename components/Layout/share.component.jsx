import React, { useState, useEffect } from 'react';

const ShareBox = ({ link }) => {
    const [showBox, setShowBox] = useState(false);

    useEffect(() => {
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        }
    }, []);

    const handleMouseOver = () => {
        setShowBox(true);
    }

    const handleMouseOut = () => {
        setShowBox(false);
    }

    return (
        <div className={`${styles.shareBox} ${showBox ? styles.show : styles.hide}`}>
            <p>{link}</p>
        </div>
    );
}

export default ShareBox;
