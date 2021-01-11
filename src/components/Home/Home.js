import React from 'react';
import './home.css'
import '../ItemCount/ItemCount'
import ItemList from "../ItemList/ItemList";
import CategoriesContainer from "../CategoriesContainer/CategoriesContainer";


const Home = ({greeting}) => {
    return (
        <div className='App'>
            <h1 className='title title-home is-1'>{greeting="Productos"}</h1>
            <CategoriesContainer/>
            <ItemList/>
        </div>
    );
};

export default Home;