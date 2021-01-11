import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import './item.css';

const Item = ({products}) => {
    return (
        <div className='columns columns-items'>
            {products && products.length ?
                products.map((product) =>
                    <div className='column' key={product.id}>
                        <div className='card' key={product.id}>
                            <div className='card-image' key={product.id}>
                                <Link to={`/item/${product.id}`}><img src={product.image} alt='product-img'/></Link>
                            </div>
                            <div className='card-content'>
                                <Link to={`/item/${product.id}`}>{product.title}</Link>
                                <div>
                                    $ {product.price}
                                </div>
                            </div>
                        </div>
                    </div>

                ): <div><FontAwesomeIcon icon={faSpinner} className='fa-spin'/></div>
            }

        </div>

    );
};
export default Item;