import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import './itemCount.css';

const ItemCount = ({product, min, max, counter, setCounter}) => {
    const { increase, decrease, itemCount } = useContext(CartContext)

    const onHandleClick = (sign) => {
        if (counter < max && sign === '+') setCounter(counter + 1)
        else if (counter > min && sign === '-') setCounter(counter - 1)
    }

    return (
        <div>
            <button className='btn btn-control' onClick={() => onHandleClick('+')}>+</button>
            <span className='counter'>{counter}</span>
            <button className='btn btn-control' onClick={() => onHandleClick('-')}>-</button>
        </div>
    );
};

export default ItemCount;