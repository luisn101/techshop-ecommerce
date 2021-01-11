import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

const CartProducts = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <div>
            {
                cartItems.map(product => <CartItem key={product.id} product={product}/> )
            }
        </div>
    );
};

export default CartProducts;