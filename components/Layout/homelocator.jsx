import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/collections.module.css'

const HomesHeader = () => {
    const router = useRouter();

    return (
        <React.Fragment>
            <Link href="/">
                <span className={styles.collectionssmallheader}> home</span>
            </Link>
        </React.Fragment>
    );
};

export default HomesHeader;