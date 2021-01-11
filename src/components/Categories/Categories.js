import React from 'react';
import './categories.css'

const Categories = ({list}) => {
    return (
        <div className='column column-categories'>
            <h2 className='subtitle'>Categorías</h2>
            {
                list && list.categories && list.categories.map((cat) => (
                    <div>
                        <a href={`/category/${cat.id}`} className='link-category'>
                            {cat.name}
                        </a>
                    </div>
                ))
            }

        </div>
    );
};

export default Categories;