import React, { useState } from "react";
import DUMMY_PRODUCTS_HOME from "../dummy-data-home";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function ClothingHome() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleLeftClick = () => {
        setCurrentIndex((currentIndex - 1 + DUMMY_PRODUCTS_HOME.length) % DUMMY_PRODUCTS_HOME.length);
    };

    const handleRightClick = () => {
        setCurrentIndex((currentIndex + 1) % DUMMY_PRODUCTS_HOME.length);
    };

    return (
        <div className={styles.clothingslider}>
                {DUMMY_PRODUCTS_HOME.map(( item, index ) => (
                    <div className={styles.clothingitem} key={item.id} style={{
                        display: (index >= currentIndex && index < currentIndex + 4) ? 'block' : 'none',
                    }} >
                        <h3 className={styles.titleitem}>{item.title}</h3>
                        <div style={{ textAlign: 'center' }}>
                            <Link href="/collections">
                                <Image className={styles.imagecontainer} 
                                src={item.image} 
                                alt={item.title} 
                                width="256" height="256" 
                                />
                            </Link>
                        </div>
                        <p className={styles.descriptionitem}>{item.description}</p>
                        <p className={styles.priceitem}>Price: {item.price.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })}</p>
                    </div>
                ))}
            <button className={`${styles.sliderbtn} ${styles.sliderbtnleft}`} onClick={handleLeftClick}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
                </svg>
            </button>
            <button className={`${styles.sliderbtn} ${styles.sliderbtnright}`} onClick={handleRightClick}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
                </svg>
            </button>
        </div>
    );
}

export default ClothingHome;