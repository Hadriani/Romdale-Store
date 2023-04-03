import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/collections.module.css'

const CollectionsHeader = () => {
    const router = useRouter();

    return (
        <React.Fragment>
            <Link href="/collections">
                <span className={styles.collectionssmallheader}> all collections</span>
            </Link>
        </React.Fragment>
    );
};

export default CollectionsHeader;