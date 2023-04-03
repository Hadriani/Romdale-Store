import React from 'react';
import SHOES_MAP from '../../../shoes-data';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/collections.module.css';
import { useState, useContext, useEffect } from 'react';
import Router from 'next/router';
import SmallHeader from '../../../components/Layout/locator';


import { CartContext } from '../../../components/Contexts/cart.context';
import SortShoes from '../../../components/Layout/sortby-shoes';

import { SlArrowUp, SlArrowDown } from "react-icons/sl";



function JordanPage(props) {

    const [showButton, setShowButton] = useState(null);
    const { cartCount } = useContext(CartContext);

    const [sortedItems, setSortedItems] = useState([...SHOES_MAP]);

    const [currentPage, setCurrentPage] = useState(0);

    const [showCartCount, setShowCartCount] = useState("");
    const [arrowDirection, setArrowDirection] = useState("up");
    const [arrowDirection2, setArrowDirection2] = useState("up");

    function handleSelectChange(event) {
        Router.push(`/collections/shoes/${event.target.value}`)
    }

    function handleSelectChange2(event) {
        Router.push(`/collections/shoes/PriceRange/${event.target.value}`)
    }

    function toggleArrow() {
        if (arrowDirection === 'up') {
            setArrowDirection("down")
        } else {
            setArrowDirection("up")
        }
    }

    function toggleArrow2() {
        if (arrowDirection2 === 'up') {
            setArrowDirection2("down")
        } else {
            setArrowDirection2("up")
        }
    }

    const numOfPages = Math.ceil(sortedItems.length / 15)

    const JORDAN_MAP = sortedItems.filter(item => item.category === 'Jordan').slice(currentPage * 5, (currentPage + 1) * 5);

    const handleNextClick = () => {
        setCurrentPage((currentPage + 1) % numOfPages);
    };

    const { addItemToCart } = useContext(CartContext);

    const handleAddToCart = (item) => {
        addItemToCart(item);
    }

    const { addItemToWishlist } = useContext(CartContext);
    const handleAddToWish = (item) => {
        addItemToWishlist(item);
    }

    useEffect(() => {
        if (cartCount > 0) {
            setShowCartCount(cartCount); // update state with cartCount
        } else {
            setShowCartCount(""); // reset state to empty string
        }
    }, [cartCount]);

    return (
        <div>
            <div className={styles.navigationheader}>
                <nav className={styles.nav}>
                    <div className={styles.logoicon}>
                        <Link className={styles.a} href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-affiliate" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
                                    <svg className={`${styles.navicon} icon icon-tabler icon-tabler-search`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="10" cy="10" r="7" />
                                        <line x1="21" y1="21" x2="15" y2="15" />
                                    </svg>
                                </Link>
                            </il>
                            <li>
                                <Link className={styles.a} href="/users">
                                    <svg className={`${styles.navicon} icon icon-tabler icon-tabler-users`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
                                    <svg className={`${styles.navicon} icon icon-tabler icon-tabler-heart`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.a} href="/checkout">
                                    <svg className={`${styles.navicon} ${styles.navcart} icon icon-tabler icon-tabler-shopping-cart`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="6" cy="19" r="2" />
                                        <circle cx="17" cy="19" r="2" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path d="M6 5l14 1l-1 7h-13" />
                                    </svg>
                                    <div className={styles.cartwrapper}>
                                        <i className={`${styles.fa} ${styles.fas}`}>
                                            {showCartCount}
                                        </i>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <SmallHeader />
            <div className={styles.searchhatcontainer2}>
                <h1 className={styles.headercaps}>JORDAN</h1>
                <span className={styles.toolbar}>
                    <SortShoes />
                </span>
            </div>

            <div className={styles.sidebar}>
                <h2>Shop by Brand</h2>
                <div className={styles.selectContainer}>
                    <select className={styles.selectbar} onChange={handleSelectChange} onClick={toggleArrow}>
                        <option value="all">All</option>
                        <option value="nikeairmax">Nike Air Max</option>
                        <option value="jordan">Jordan</option>
                        <option value="nikeboots">C&J Nike Boots</option>
                        <option value="annafield">Anna Field</option>
                        <option value="nikezoom">Nike Zoom</option>
                    </select>
                    {arrowDirection === 'up' ? <SlArrowUp className={styles.arrow} /> : <SlArrowDown className={styles.arrow} />}
                </div>
                <div className={styles.pricesidecontainer}>
                    <h2>Shop by Price</h2>
                    <div className={styles.selectPrice}>
                        <select className={styles.selectbar} onChange={handleSelectChange2} onClick={toggleArrow2}>
                            <option value="all">All</option>
                            <option value="20-100">20$ - 100$</option>
                            <option value="100-150">100$ - 150$</option>
                            <option value="150-250">150$ - 250$</option>
                        </select>
                        {arrowDirection2 === 'up' ? <SlArrowUp className={styles.arrow} /> : <SlArrowDown className={styles.arrow} />}
                    </div>
                </div>
            </div>

            <div className={styles.hatscaffoldingcontainer}>
                {JORDAN_MAP.map(({ id, name, imageUrl, price, cartButton, favoriteButton }) => (
                    <div key={id} className={styles.hatitemcontainer}
                        onMouseOver={() => setShowButton(id)}
                        onMouseOut={() => setShowButton(null)}>
                        {showButton === id && <button className={styles.favoriteHatbutton}
                            onClick={() => handleAddToWish({ id, name, imageUrl, price })}>{favoriteButton}
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="100%" height="100%" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="#ff0000" strokeLinecap="round" strokeLinejoin="round">
                                <title>Add To Favorites</title>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                        </button>}
                        <div style={{ textAlign: 'center' }}>
                            <Link href="/collections/shoes/[id.shoes]" as={`/collections/shoes/${id}`}>
                                <Image className={styles.hatimage}
                                    src={imageUrl}
                                    alt={name}
                                    width="300" height="350"
                                />
                            </Link>
                        </div>
                        {showButton === id && <button className={styles.cartHatButton}
                            onClick={() => handleAddToCart({ id, name, imageUrl, price })}>
                            {cartButton}
                        </button>}
                        <h3 className={styles.hatname}>{name}</h3>
                        <p className={styles.hatprice}>{price.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })}</p>
                    </div>
                ))}
                <div className={styles.blankhatcontainer}></div>
            </div>

            <div className={styles.blankhatcontainer}>
                <div className={styles.nextbuttoncontainer}>
                    <button onClick={handleNextClick} className={styles.nextpagebutton}>Next</button>
                    <p className={styles.paranextbutton}>page {currentPage + 1} of {numOfPages}</p>
                </div>
            </div>

            <footer className={styles.footer} >
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

export default JordanPage;