import React, { useState } from "react";
import GALLERY_HOME from "../gallery-data-home";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function GalleryHome () {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleLeftClick = () => {
        setCurrentIndex((currentIndex - 1 + GALLERY_HOME.length) % GALLERY_HOME.length);
    };

    const handleRightClick = () => {
        setCurrentIndex((currentIndex + 1) % GALLERY_HOME.length);
    };

    return (
        <div className={styles.galleryhomeslider}>
            {GALLERY_HOME.map(( item, index ) => (
                <div className={styles.galleryhomeitem} key={item.id} style={{
                    display: (index >= currentIndex && index < currentIndex + 1) ? 'block' : 'none',
                }} >
                    <h2 className={styles.gallerynamehome}>{item.name}</h2>
                    <div style={{ textAlign: 'center'}}>
                        <Link href="/products">
                            <Image className={styles.imagegalleryhome}
                                src={item.imageUrl}
                                alt={item.name}
                                width="300" height="330" 
                            />
                        </Link>
                    </div>
                </div>
            ))}
            <button className={`${styles.sliderbtn} ${styles.sliderbtnleft}`} onClick={handleLeftClick}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
              </svg>
            </button>
            <button className={`${styles.sliderbtn} ${styles.sliderbtnright}`} onClick={handleRightClick}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
              </svg>
            </button>
        </div>
    );
}

export default GalleryHome;