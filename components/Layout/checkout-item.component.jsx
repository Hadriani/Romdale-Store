import React from "react";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { VscDiffRemoved } from "react-icons/vsc";
import { VscDiffAdded } from "react-icons/vsc";

import Image from "next/image";
import styles from "../../styles/checkout-wishlist.module.css";
import { CartContext } from "../Contexts/cart.context";


const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemToCart } =
        useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

    return (
        <div className={styles.checkoutitemcontainer}>
            <div className={styles.imagecontainer}>
                <Image src={imageUrl} alt={`${name}`} width={100} height={100}/>
            </div>
            <span className={styles.nameimagecheckout}> {name} </span>
            <span className={styles.quantitycheckout}>
                <div>
                    <VscDiffRemoved onClick={removeItemHandler} className={styles.minusbutton}></VscDiffRemoved>
                </div>

                <span className={styles.value}>{quantity}</span>

                <div>
                    <VscDiffAdded onClick={addItemHandler} className={styles.plusbutton}></VscDiffAdded>
                </div>
            </span>
            <span className={styles.pricecheckout}> ${price} </span>
            <div className={styles.quantitycheckout}>
                <FaTrash className={styles.removeicon} onClick={clearItemHandler} />
            </div>
        </div>
    );
}

export default CheckoutItem;