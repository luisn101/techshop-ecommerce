import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({product}) => {
    const { increase, decrease, removeProduct } = useContext(CartContext)

    return (
        <div>
            <div className='columns is-narrow columns-cart'>
                <div className='column is-one-fifth'>
                    <img className='img-cart' src={product.image} alt='cart-product-img'/>
                </div>
                <div className='column column-item-title is-one-third'>
                    {product.title}<br/>
                    $ {product.price}
                </div>
                <div className='column column-quantity is-one-fifth '>
                    Cantidad: {product.quantity}
                </div>
                <div className='column column-item-title is-one-third'>
                    <button className=' btn btn-add-item' onClick={() => increase(product)}>+</button>
                    {
                        product.quantity > 1 ?
                            <button className=' btn btn-remove-item' onClick={() => decrease(product)}>-</button> :
                            <button className=' btn btn-remove-item' onClick={() => removeProduct(product)}><FontAwesomeIcon icon={faTrashAlt}/></button>
                    }

                </div>
            </div>

        </div>

    );
};

export default CartItem;