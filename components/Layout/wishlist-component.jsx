import React from "react";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";

import Image from "next/image";
import styles from "../../styles/checkout-wishlist.module.css";
import { CartContext } from "../Contexts/cart.context";
import { Button } from "semantic-ui-react";


const WishItem = ({ wishItem }) => {
    const { name, imageUrl, price } = wishItem;
    const { addItemToCart, clearItemFromWishlist } = useContext(CartContext);

    const moveToCart = () => {
        addItemToCart(wishItem);
        clearItemFromWishlist(wishItem);
    }

    const clearItemHandler = () => clearItemFromWishlist(wishItem);

    return (
        <div className={styles.checkoutitemcontainer2}>
            <div className={styles.imagecontainer}>
                <Image src={imageUrl} alt={`${name}`} width={100} height={100} />
            </div>
            <span className={styles.nameimagecheckout2}> {name} </span>
            <span className={styles.pricecheckout2}> ${price} </span>
            <div className={styles.buttonwish} onClick={moveToCart}>
                <Button className={styles.movetocartbutton}>Move To Cart</Button>
            </div>
            <div className={styles.quantitycheckout2}>
                <FaTrash className={styles.removeicon} onClick={clearItemHandler} />
            </div>
        </div>
    );
}

export default WishItem;