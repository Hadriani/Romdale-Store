import HATS_MAP from '../../../hats-data';
import Image from 'next/image';
import styles from "../../../styles/collections.module.css";
import Link from 'next/link';
import { TbHeart } from 'react-icons/tb';

import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../../components/Contexts/cart.context';

import { AiOutlineStar } from 'react-icons/ai';
import ClothingHome from '../../itemhomelist';
import Contact from '../../../components/Firebase/contact-form.component';


export async function getStaticPaths() {

    const paths = Object.keys(HATS_MAP).map(id => ({
        params: { id },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const item = HATS_MAP[params.id];

    return { props: { item } };
}

export default function Hat({ item }) {
    const { cartCount } = useContext(CartContext);
    const [showCartCount, setShowCartCount] = useState("");
    const [rating, setRating] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleStarClick = (e) => {
        const selectedRating = e.target.dataset.index;
        setRating(selectedRating);
    }

    const renderStars = () => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<AiOutlineStar key={i} className="gold" data-index={i + 1} onClick={handleStarClick} />);
            } else {
                stars.push(<AiOutlineStar key={i} data-index={i + 1} onClick={handleStarClick} />);
            }
        }
        return stars;
    }

    const { addItemToCart } = useContext(CartContext);
    const handleAddToCart = (props) => {
        addItemToCart(props.item);
    }

    const { addItemToWishlist } = useContext(CartContext);
    const handleAddToWish = (props) => {
        addItemToWishlist(props.item);
    }

    useEffect(() => {
        if (cartCount > 0) {
            setShowCartCount(cartCount); 
        } else {
            setShowCartCount("");
        }
    }, [cartCount]);

    return (
        <div className={styles.container}>
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
                    <div className={`${styles.mobileMenuIcon} ${showMenu ? styles.showMobileMenu : ''}`} onClick={toggleMenu}>
                        <span className={styles.menusymbol}>☰</span>
                    </div>
                    <ul className={`${styles.ulnav} ${showMenu ? styles.showDropdown : ''}`}>
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

            <div className={styles.idcontent}>
                <div className={styles.headeritem}>
                    <h2 className={styles.headertextid}>{item.name}</h2>
                        <div className={styles.reviewstars}>
                            <>{renderStars()} </>
                        </div>
                    <p className={styles.pricetextid}>{item.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    })}</p>
                    <hr className={styles.hrid} />
                    <div className={styles.idfavcart}>
                        <TbHeart onClick={() => handleAddToWish({ item })} className={styles.biheartid}/>
                        <button className={styles.idHatButton} onClick={() => handleAddToCart({ item })}>ADD TO CART</button>
                    </div>
                    <div className={styles.iddescription} >
                        <p className={styles.iditemtext}>{item.description}</p>
                    </div>
                </div>
                <div className={styles.imagedetail}>
                    <Image src={item.imageUrl} alt={item.name} width="500" height="500" className={styles.imageid}/>
                </div>
            </div>

            <div className={styles.blankidcontainer}></div>
            <form id="review-form" className={styles.formid}>
                <label className={styles.labelid}>Comment:</label>
                <textarea id="comment" name="comment" className={styles.textareaid}></textarea>

                <label className={styles.labelid}>Rating:</label>
                <div className={styles.starsContainer} value="rating">
                    {renderStars()}
                </div>
                <div className={styles.submitidcontainer}>
                    <input type="submit" value="Submit Review" className={styles.submitid}/>
                </div>
            </form>
            

            <div className={styles.blankidcontainer}></div>
            <ClothingHome />

            <div>
                <div>
                    <Contact />
                </div>
            </div>

            <div className={styles.blankidcontainer}></div>
            <div className={styles.productclaims}>
                <div className={styles.pagewidth}>
                    <div className={styles.productclaims2}>
                        <div>
                            <div className={styles.imagebx}>
                                <Image src="https://cdn.shopify.com/s/files/1/0279/2649/5337/files/icon4.png?v=1625211833" alt="" width="50" height="50" />
                            </div>

                            <div>
                                <h2>BUILT TO LAST</h2>
                                <p>Our clothes are known for their strength and durability, striking a superb balance between functionality and style.</p>
                            </div>
                        </div>

                        <div>
                            <div className={styles.imagebx}>
                                <Image src="https://cdn.shopify.com/s/files/1/0279/2649/5337/files/icon3.png?v=1625211868" alt="" width="50" height="50" />
                            </div>
                            <div>
                                <h2>TAILORED FIT</h2>
                                <p>With 5-7 size options, we developed perfectly fitted jackets that suit any body type like a glove.</p>
                            </div>
                        </div>

                        <div>
                            <div className={styles.imagebx}>
                                <Image src="https://cdn.shopify.com/s/files/1/0279/2649/5337/files/teardrop.png?v=1625211986" alt="" width="50" height="50" />
                            </div>
                            <div>
                                <h2>WATERPROOF</h2>
                                <p>Even on the rainiest days, our waterproof formula will keep you dry!</p>
                            </div>
                        </div>

                        <div>
                            <div className={styles.imagebx}>
                                <Image src="https://cdn.shopify.com/s/files/1/0279/2649/5337/files/icon2.png?v=1625212014" alt="" width="50" height="50" />
                            </div>
                            <div>
                                <h2>DUST / MOISTURE RESISTANT</h2>
                                <p>Wear it comfortably without fear of moisture or dust damaging it, a lesser-known benefit yet important.</p>
                            </div>
                        </div>

                        <div>
                            <div className={styles.imagebx}>
                                <Image src="https://cdn.shopify.com/s/files/1/0279/2649/5337/files/icon5.png?v=1625212039" alt="" width="50" height="50" />
                            </div>
                            <div>
                                <h2>ALL-SEASONS WEAR</h2>
                                <p>Complete your look with non-bulky, lightweight jackets that go with every outfit, no matter the season.</p>
                            </div>
                        </div>

                        <div>
                            <div className={styles.imagebx}>
                                <Image src="https://cdn.shopify.com/s/files/1/0279/2649/5337/files/icon1.png?v=1625212060" alt="" width="50" height="50" />
                            </div>
                            <div>
                                <h2>HIGHEST QUALITY</h2>
                                <p>Handmade from the highest quality materials, Romdale guarantees that you ll look and feel your best, day after day.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.wrapperfooter}>
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
        </div>
    );
}