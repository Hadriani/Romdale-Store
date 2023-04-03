import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../components/Contexts/cart.context';

import React from "react";
import Link from "next/link";

import CheckoutItem from "../../components/Layout/checkout-item.component";
import styles from '../../styles/checkout-wishlist.module.css';
import HomesHeader from '../../components/Layout/homelocator';
import { Button } from 'semantic-ui-react';


function calculateOrderTotal(cartTotal, shippingFee) {
    return cartTotal + shippingFee;
}

function CheckOut() {
    const [orderTotal, setOrderTotal] = useState(0);
    const { cartItems, cartTotal } = useContext(CartContext);
    const { cartCount } = useContext(CartContext);
    const [showCartCount, setShowCartCount] = useState("");

    useEffect(() => {
        if (cartItems.length > 0) {
            const total = calculateOrderTotal(cartTotal, 5);
            setOrderTotal(total);
        } else {
            setOrderTotal(0);
        }
    }, [cartItems, cartTotal]);

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
                                    <svg className={`${styles.navicon} icon icon-tabler icon-tabler-shopping-cart`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
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

            <HomesHeader />
            <div className={styles.checkoutcontainer}>
                <div className={styles.checkoutheader}>
                    <div className={styles.headerblock}>
                        <span className={styles.productcheck}>Product</span>
                    </div>
                    <div className={styles.headerblock}>
                        <span className={styles.descrcheck}>Description</span>
                    </div>
                    <div className={styles.headerblock}>
                        <span className={styles.quantcheck}>Quantity</span>
                    </div>
                    <div className={styles.headerblock}>
                        <span className={styles.pricecheck}>Price</span>
                    </div>
                    <div className={styles.headerblock}>
                        <span className={styles.removecheck}>Remove</span>
                    </div>
                </div>
                
                <div className={styles.itemcheckout}>
                    {cartItems.length > 0 &&
                    cartItems.map((cartItem) => (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    ))}
                    {cartItems.length === 0 && 
                        <div className={styles.message}>
                        <p>Your cart is empty</p>
                        </div>}
                    {cartItems.length > 0 &&
                    <span className={styles.totalcheckout}></span>}
                </div>

                <div className={styles.buttoncollections}>
                    <Link href="/preview/preview">
                        <Button className={styles.movetocollections}>Continue Shopping</Button>
                    </Link>
                </div>
                
                {cartItems.length > 0 &&
                <div className={styles.ordertotalamount}>
                    <div className={styles.ordertotalsubdata}>
                        {cartItems.length > 0 &&
                        <div className={styles.subtotal}>
                            <p>subtotal:</p>
                            <p key={cartItems.id} cartItem={cartItems}>price: ${cartTotal}</p>
                        </div>}

                        {cartItems.length > 0 &&
                        <div className={styles.shippingfee}>
                            <p>Shipping Fee: </p>
                            <p>price: $5</p>
                        </div>
                        }

                        {cartItems.length > 0 &&
                        <hr className={styles.hr}/>}

                        {cartItems.length > 0 &&
                        <div className={styles.ordertotal}>
                            <p>Order Total: </p>
                            <p>Total:  ${orderTotal}</p>
                        </div>
                        }
                    </div>
                </div>}
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

export default CheckOut;