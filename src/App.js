import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CategoryContainer from "./components/CategoryContainer/CategoryContainer";
import CategoriesContainer from "./components/CategoriesContainer/CategoriesContainer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <CartContextProvider>
        <div className="App">
            <NavBar/>
            <Switch>
                <Route path="/item/:id" component={ItemDetailContainer}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route exact path="/category/:id" component={CategoryContainer}/>
                <Route path="/categories" component={CategoriesContainer}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/" component={Home} />
            </Switch>
            {/*<Link to={'/list'}>Return to Home</Link>
            <Link to={'/'}>Return to Home</Link>*/}
        </div>
    </CartContextProvider>

  );
}

export default App;
