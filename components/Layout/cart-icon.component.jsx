import { useContext } from 'react';

import { CartContext } from '../../components/Contexts/cart.context';


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div onClick={toggleIsCartOpen}>
            <div>{cartCount}</div>
        </div>
    );

};


export default CartIcon;