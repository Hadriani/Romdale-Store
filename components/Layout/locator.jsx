import React from 'react';
import { useRouter} from 'next/router';
import Link from 'next/link';
import styles from '../../../branded-products/styles/collections.module.css'

const SmallHeader = () => {
    const router = useRouter();
    const pathname = router.pathname.split('/')[2];

    return (
        <React.Fragment>
            <Link href={`/collections/${pathname}`}>
                <span className={styles.smallheader}> all {pathname}</span>
            </Link>
        </React.Fragment>
    );
};

export default SmallHeader;