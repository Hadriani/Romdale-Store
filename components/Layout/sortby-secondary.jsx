import React, { useState } from 'react';
import styles from '../../../branded-products/styles/collections.module.css';
import HATS_MAP from '../../hats-data';
import { SlArrowUp } from "react-icons/sl"
import { SlArrowDown } from "react-icons/sl"

function SortBar2(props) {
    const [showButton, setShowButton] = useState(null);
    const [arrowDirection, setArrowDirection] = useState("up")

    function sortItems(event) {
        const sortValue = event.target.value;
        let sortedItems;

        if (sortValue === 'low-high') {
            sortedItems = HATS_MAP.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'high-low') {
            sortedItems = HATS_MAP.sort((a, b) => b.price - a.price);
        } else if (sortValue === 'featured') {
            sortedItems = HATS_MAP.filter(item => item.category === 'featured');
        }
    }

    function toggleArrow() {
        if (arrowDirection === 'up') {
            setArrowDirection("down")
        } else {
            setArrowDirection("up")
        }
    }

    return (
        <label className={styles.sortby}>
            <span className={styles.sortbylabel}>
                <p className={styles.paragraphsorted}>Sort by:</p>
            </span>
            <div className={styles.selectContainer2}>
                <select onChange={sortItems} className={styles.selectbarsorted} onClick={toggleArrow}>
                    <option value="low-high">Prices: From Low to High</option>
                    <option value="high-low">Prices: From High to Low</option>
                </select>
                {arrowDirection === 'up' ? <SlArrowUp className={styles.arrow2} /> : <SlArrowDown className={styles.arrow2} />}
            </div>
        </label>
    );
}


export default SortBar2;