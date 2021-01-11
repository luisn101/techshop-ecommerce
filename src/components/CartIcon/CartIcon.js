import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './cartIcon.css'

const CartIcon = ({data}) => {
    return (
        <div className='cart-icon-container'>
            <span><FontAwesomeIcon icon={faShoppingCart} />{data}</span>
        </div>

    );
};

export default CartIcon;