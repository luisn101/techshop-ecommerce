import React, {useContext, useState} from 'react';
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import CartProducts from "./CartProducts";
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import {getFirestore} from "../../firebase";
import './cart.css'


const Cart = () => {
    const { cartItems, clearCart, total } = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const addOrder = () => {
        if(document.getElementById('form-email').value === document.getElementById('check-email').value){
            const db = getFirestore()
            const orders = db.collection('orders')

            const products = cartItems.map(cartItem => ({
                title: cartItem.title,
                price: cartItem.price,
                id: cartItem.id
            }))

            const newOrder = {
                buyer: {
                    name: document.getElementById('form-name').value,
                    phone: document.getElementById('form-phone').value,
                    email: document.getElementById('form-email').value
                },
                items: products,
                total: total,
                date: firebase.firestore.Timestamp.fromDate(new Date())
            }

            orders.add(newOrder)
                .then(({ id }) => {
                    setOrderId(id)
                }).catch((error) => {
                console.log(error)
            }).finally(() => {
                updateStock()
                setLoading(false)
            })
        } else {
            document.getElementById('message').style.display = 'block'
        }


    }

    const updateStock = () => {
        const db = getFirestore()
        cartItems.forEach((item, index) => {
            const itemDoc = db.collection('items').doc(item.id)
            const newAmount = item.stock - cartItems[index].quantity
            const newStock = itemDoc.update({[item.stock]: newAmount})
        })
    }

    if(orderId !== '') {
        return (
            <div>
                <h1 className='title title-orden'>Orden de compra</h1>
                <h2> ID de la compra: <strong>{orderId}</strong></h2>

            </div>
        )
    }

    return (
        <div>
            <h1 className='title is-1 title-home'>Carrito de Compras</h1>
            {
                cartItems.length > 0 ?
                    <CartProducts/> :
                    <div className='empty-cart'>
                        <h3>Su carrito está vacío</h3>
                        <Link to='/' className='link'>Ver Productos</Link>
                    </div>
            }


            <div className='column column-total'>
                {
                    cartItems.length > 0 &&
                    <div className='column'>
                        <h2 className='subtitle subtitle-total'>Pago total</h2>
                    </div>
                }
                {
                    cartItems.length > 0 &&
                    <div className='column total'>
                        <p>$ {total}</p>
                    </div>
                }

                <div className='column column-checkout'>
                    {
                        cartItems.length > 0 &&

                                <button onClick={clearCart} className='btn btn-clear-cart'>VACIAR CARRITO</button>

                    }
                    {
                        cartItems.length > 0 &&
                            <fragment>
                                <button onClick={addOrder} className='btn btn-buy'>ORDEN DE COMPRA</button>
                                <form>
                                    <input id='form-name' type='text' placeholder='Nombre'/><br/>
                                    <input id='form-phone' type='tel' placeholder='Teléfono'/><br/>
                                    <input id='form-email' type='email' placeholder='Email'/><br/>
                                    <input id='check-email' type='email' placeholder='Vuelva a escribir su email'/>
                                    <label id="message" style={{display:'none'}}>Las direcciones de email no coinciden</label>
                                </form>
                            </fragment>
                    }
                </div>
                <div className='column'>

                </div>
            </div>
        </div>
    );
};

export default Cart;