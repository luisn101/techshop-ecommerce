import React, { useContext } from 'react';
import './itemDetail.css';
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({item, loading, counter, setCounter, handleAddToCart}) => {
    const { addProduct, cartItems, increase } = useContext(CartContext)

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return (
        loading ?
            <div><FontAwesomeIcon icon={faSpinner} className='fa-spin'/></div>
            :
            <div>
                <div className='columns item-detail'>
                    <div className='column is-one-fifth'>
                        <img className='img-detail' src={item.image} alt='product-img'/>
                    </div>
                    <div className='column column-item'>
                        {item.title}<br/>
                        $ {item.price}
                    </div>
                    <div className='column is-one-third' >
                        <ItemCount min={1} max={item.available_quantity} counter={counter} setCounter={setCounter}/>
                        {
                            isInCart(item) &&
                            <button
                                onClick={() => increase(item)}
                                className='btn-add-to-cart' >Agregar al Carrito ({counter})</button>
                        }
                        {
                            !isInCart(item) &&
                            <button
                                onClick={() => addProduct(item)}
                                className='btn-add-to-cart' >Agregar al Carrito ({counter})</button>
                        }

                    </div>
                </div>
                <div className='column-description'>
                    <h2 className='title-description'>Descripción</h2>
                    {item.description}
                </div>
            </div>
    );
};

export default ItemDetail;