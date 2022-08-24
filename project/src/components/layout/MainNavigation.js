import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import "./MainNavigation.css";
import cart from "../images/shoppingCart.svg"
function MainNavigation() {
    return (
        <div>
        <nav className="navBar">
            <div className="home">
            <Link to="home">Home</Link>
            </div>

            <div>
            <Link to="cart">    
            <button className="cartButton">
            <img src={cart} className="cart" alt="Cart" />Go to Cart
            </button>
            </Link>
            </div>
        </nav>
        </div>
)
}

export default MainNavigation;