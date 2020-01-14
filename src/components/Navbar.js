import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
import logo from '../logo.svg'
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
        <NavWrapper className="navbar navbar-expand-sm  px-sm-5">
        <Link to="/">
        <img src={logo} alt="logo" className="navbar-brand"/>
        </Link>
        <ul className="navbar-nav align-item-center">
        <li className="nav-item ml-5">
        <Link to="/" className="nav-link">
        Products
        </Link>
        </li>
        </ul>
        <Link to="/cart" className="nav-link ml-auto">
        <ButtonContainer>
        <span className="mr-2">
        <i className="fas fa-cart-plus"/>
        </span>
        my cart
        </ButtonContainer>
        </Link>
        </NavWrapper>
        )
   }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
color: var(--mainWhite) !important;
font-size: 1.3rem;
text-transform: capitalize;
}

.ulbar{
list-style: none;
}

`;