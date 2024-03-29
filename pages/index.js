import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React from 'react';
import Link from 'next/link';
import { useRef } from 'react';
import { useEffect, useState } from 'react';

import InstagramIcon from '../public/images/instagramicon.png'
import FacebookIcon from '../public/images/facebookicon.png'
import TwitterIcon from '../public/images/twittericon.png'
import YoutubeIcon from '../public/images/youtubeicon.png'
import TikTokIcon from '../public/images/tiktokicon.png'
import PinterestIcon from '../public/images/pinteresticon.png'

import ClothingHome from './itemhomelist';
import GalleryHome from './galleryhomelist';


function Home() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const buttonRef = useRef(null);

  function invertButtonColor() {
    const button = buttonRef.current;
    const currentBackgroundColor = button.style.backgroundColor;
    const currentTextColor = button.style.color;
    button.style.backgroundColor = currentTextColor;
    button.style.color = currentBackgroundColor;
  }

  const mainRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);

  useEffect(() => {
    const main = mainRef.current;

    main.style.backgroundImage = "url('images/christmasinterior.jpg')";

    const handleButton1Click = () => {
      main.style.backgroundImage = "url('images/christmasinterior.jpg')";
    };
    
    const handleButton2Click = () => {
      main.style.backgroundImage = "url('images/christmastown.jpg')";
    };

    const button1 = button1Ref.current;
    if (button1) {
      button1.addEventListener('click', handleButton1Click);
    }

    const button2 = button2Ref.current;
    if (button2) {
      button2.addEventListener('click', handleButton2Click);
    }

    return () => {
      if (button1) {
        button1.removeEventListener('click', handleButton1Click);
      }
      if (button2) {
        button2.removeEventListener('click', handleButton2Click);
      }
    };
  }, []);


  return (
    <div className={styles.container}>
      <Head>
        <title>Romdale</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <h1 className={styles.ad}>FREE SHIPPING ON ALL ORDERS OVER $100!</h1>
      </div>
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
                  <svg className={`${styles.navicon} icon icon-tabler icon-tabler-shopping-cart`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
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

      
      <main ref={mainRef} className={styles.main}>
        <h1 className={styles.welcome}>Romdale - Where Dreams Come True</h1>
        <p className={styles.shopbutton}>Discover unique and stylish products at our shop.</p>
        <div className={styles.dotcontainer}>
          <button ref={button1Ref} className={styles.dot1}></button>
          <button ref={button2Ref} className={styles.dot2}></button>
        </div>
      </main>

      
      <div className={styles.containerfull}>
        <div className={styles.blockheader}>
          <h1 className={styles.blocktitle}>
            <span className={styles.itemrecommend}>
              <Link href="/collections">
                RECOMMENDATIONS FOR YOU
              </Link>
            </span>
          </h1>
        </div>
        <div className={styles.previewlist}>
          <ClothingHome />
        </div>  
      </div>

      

      <div className={styles.specialholidaycontainer}>
        <div className={styles.giftcontainer}>
            <h1 className={styles.maintitle}>HOLIDAY GIFT GUIDE</h1>
          <div className={styles.linktogiftguide}>
            <Link className={styles.subtitle1} href="/giftguide">Find The Perfect Gift!</Link>
          </div>
        </div>
        <div className={styles.collectioncontainer}>
          <h1 className={styles.maintitle}>HOLIDAY COLLECTIONS</h1>
          <div className={styles.linktoholidayspecial}>
            <Link className={styles.subtitle2} href="/holidayspecial">Exclusive Seasonal Releases</Link>
          </div>
        </div>
      </div>

      <div className={styles.custombuildcontainer}>
        <h1 className={styles.spotlight}>SPOTLIGHT</h1>
        <div className={styles.custombuildbackground}></div>
        <div className={styles.custominfo}>
          <h2 className={styles.h2title}>GROW AND BUILD YOUR BRAND</h2>
          <ul className={styles.ulcustombuild}>
            <li>Multiple Styles and Colors Available</li>
            <li className={styles.li1}>Customize with any patch style</li>
            <li className={styles.li2}>High Quality Labels</li>
            <li className={styles.li3}>Delivery In 48 Hours</li>
          </ul>
        </div>
        <button className={styles.buttongetstarted}>GET STARTED</button>
      </div>

      <div className={styles.galleryhomecontainer}>
        <div className={styles.galleryhomeheader}>
          <h1>CHRISTMAS ACCESSORIES</h1>
        </div>
        <div className={styles.galleryhomelist}>
          <GalleryHome />
        </div>
        <div className={styles.invertedbuttonhomecontainer}>
          <Link href="/products/accessories">
            <button className={styles.invertedbutton} ref={buttonRef} onClick={invertButtonColor}>
              VIEW ACCESSORIES
            </button>
          </Link>
        </div>
      </div>

      <div className={styles.reviewcontainer}>
        <div className={styles.socialmediacontainer}>
            <h1 className={styles.socialmediah1}>Follow us on our social medias</h1>
          <div className={styles.buttons}>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <button className={styles.instagram}>
                <Image src={InstagramIcon}
                  alt="Instagram Icon"
                  width="48"
                  height="48"
                  className={styles.instagramicon}
                />
              </button>
            </Link>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <button className={styles.facebook}>
                <Image src={FacebookIcon}
                  alt="Facebook Icon"
                  width="48"
                  height="48"
                  className={styles.facebookicon}
                />
              </button>
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <button className={styles.twitter}>
                <Image src={TwitterIcon}
                  alt="Twitter Icon"
                  width="48"
                  height="48"
                  className={styles.twittericon}
                />
              </button>
            </Link>
            <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <button className={styles.youtube}>
                <Image src={YoutubeIcon}
                  alt="Youtube Icon"
                  width="48"
                  height="48"
                  className={styles.youtubeicon}
                />
              </button>
            </Link>
            <Link href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <button className={styles.tiktok}>
                <Image src={TikTokIcon}
                  alt="TikTok Icon"
                  width="48"
                  height="48"
                  className={styles.tiktokicon}
                />
              </button>
            </Link>
            <Link href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
              <button className={styles.pinterest}>
                <Image src={PinterestIcon}
                  alt="Pinterest Icon"
                  width="48"
                  height="48"
                  className={styles.pinteresticon}
                />
              </button>
            </Link>
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
  )
}

export default Home;
