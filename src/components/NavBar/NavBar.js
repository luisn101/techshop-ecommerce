import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon/CartIcon';
import { CartContext } from "../../context/CartContext";
import './navbar.css'
import '../../assets/bulma.min.css'

export default function NavBar() {
    const {itemCount} = useContext(CartContext)

    return (
        <div className='Navbar'>
            <div>
                <h1 className='title is-1'>tech <span className='title-span'>shop</span></h1>
            </div>
            <ul className="navbar-list">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>Nosotros</Link></li>
                <li><Link to='/contact'>Contacto</Link></li>
                <li><Link to='/cart'><CartIcon/> ({itemCount})</Link></li>
            </ul>
        </div>
    );
}