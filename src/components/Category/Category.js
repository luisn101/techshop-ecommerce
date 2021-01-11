import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import './category.css'

const Category = ({items, loading}) => {
    return (
        <div className='columns columns-items'>
            {items && items.length ?
                items.map((item) =>
                    <div className='column' key={item.id}>
                        <div className='card' key={item.id}>
                            <div className='card-image' key={item.id}>
                                <Link to={`/item/${item.id}`}><img src={item.image} alt='product-img'/></Link>
                            </div>
                            <div className='card-content'>
                                <Link to={`/item/${item.id}`}>{item.title}</Link>
                                <div>
                                    $ {item.price}
                                </div>
                            </div>
                        </div>
                    </div>

                ): <div><FontAwesomeIcon icon={faSpinner} className='fa-spin'/></div>
            }

        </div>

    );
};

export default Category;