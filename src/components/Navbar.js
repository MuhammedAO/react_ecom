import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
export default class Navbar extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5">
        <Link to="/">
        <img src={logo} alt="logo" className="navbar-brand"/>
        </Link>
        <ul className="navbar-bar align-item-center">
        <li className="nav-item ml-5">
        <Link to="/products" className="nav-link">
        Products
        </Link>
        </li>
        </ul>
        <Link to="/cart" className="nav-link ml-auto">
        <button>
        <i className="fas fa-cart-plus"/>
        my cart
        </button>
        </Link>
        </nav>
        )
   }
}
