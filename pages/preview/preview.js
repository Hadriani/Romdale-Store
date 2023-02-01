import styles from '../../styles/preview.module.css';
import React from 'react';
import PREVIEW_MAP from '../../preview-data';
import Link from 'next/link';
import HomesHeader from '../../components/Layout/homelocator';


function Preview() {

    return (
        <div>
            <div className={styles.navigationheader}>
                <nav className={styles.nav}>
                    <div className={styles.logoicon}>
                        <Link className={styles.a} href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-affiliate" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
                                <path d="M11.683 12.317l5.759 -5.759" />
                                <circle cx="5.5" cy="5.5" r="1.5" />
                                <circle cx="18.5" cy="5.5" r="1.5" />
                                <circle cx="18.5" cy="18.5" r="1.5" />
                                <circle cx="8.5" cy="15.5" r="4.5" />
                            </svg>
                        </Link>
                    </div>
                    <ul className={styles.ulnav}>
                        <li className={styles.lim}>
                            <Link className={styles.a} href="/about">ABOUT</Link>
                        </li>
                        <li className={styles.lim}>
                            <Link className={styles.a} href="/products">PRODUCTS</Link>
                        </li>
                        <li className={styles.lim}>
                            <Link className={styles.a} href="/collections">COLLECTIONS</Link>
                        </li>
                        <li className={styles.lim}>
                            <Link className={styles.a} href="/giftguide">GIFT GUIDE</Link>
                        </li>
                        <li className={styles.lim}>
                            <Link className={styles.a} href="/jointheclub">JOIN THE CLUB</Link>
                        </li>
                        <li className={styles.lim}>
                            <Link className={styles.a} href="/holidayspecial">HOLIDAY SPECIAL</Link>
                        </li>
                    </ul>
                    <div className={styles.navigationsymbols}>
                        <ul>
                            <il className={styles.searchicon}>
                                <Link className={styles.a} href="/searchbar">
                                    <svg className={styles.navicon} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="10" cy="10" r="7" />
                                        <line x1="21" y1="21" x2="15" y2="15" />
                                    </svg>
                                </Link>
                            </il>
                            <li>
                                <Link className={styles.a} href="/users">
                                    <svg className={styles.navicon} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.a} href="/wishlist">
                                    <svg className={styles.navicon} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.a} href="/checkout">
                                    <svg className={styles.navicon} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="6" cy="19" r="2" />
                                        <circle cx="17" cy="19" r="2" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path d="M6 5l14 1l-1 7h-13" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className={styles.collectionscaffolding}>
                {PREVIEW_MAP.map(({ id, name, className, button, route, image }) => (
                    <div key={id} className={className} style={{ backgroundImage: `url(${image})` }}>
                        <p className={styles.namecontainers}>{name}</p>
                        <Link href="/[category]" as={`/${route}`}>
                            <button className={styles.collectionbutton}>{button}</button>
                        </Link>
                    </div>
                ))}
            </div>

            <footer className={styles.footer}>
                <div className={styles.contactfooter}>
                    <h1 className={styles.h1footer}>CONTACT</h1>
                    <div className={styles.contactdetailsfooter}>
                        <p>Email: info@romdale.com</p>
                        <p>Address: 2869 W Bucharest</p>
                    </div>
                </div>
                <div className={styles.informationfooter}>
                    <h2 className={styles.h2footer}>INFORMATION</h2>
                    <div className={styles.infocontent}>
                        <p>ABOUT US</p>
                        <p>TERMS & CONDITIONS</p>
                        <p>SHIPPING POLICY</p>
                        <p>PRIVACY POLICY</p>
                        <p>RETURN POLICY</p>
                    </div>
                </div>
                <div className={styles.customerfooter}>
                    <h3 className={styles.h3footer}>CUSTOMER SERVICE</h3>
                    <div className={styles.customercontent}>
                        <p>CONTACT US</p>
                        <p>FAQ</p>
                        <p>EMPLOYMENT</p>
                        <p>ACCESSIBILITY STATEMENT</p>
                    </div>
                </div>
                <div className={styles.newssignupfooter}>
                    <h4 className={styles.h4footer}>NEWSLETTER SIGN UP</h4>
                    <div className={styles.newssigncontent}>
                        <p>Sign up for exclusive updates, new arrivals &</p>
                        <p>insider only discounts</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Preview;