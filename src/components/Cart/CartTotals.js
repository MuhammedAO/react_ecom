import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import PayPalButton from './PayPalButton'
export default function CartTotals({value, history}) {
    const {cartTotal, cartSubTotal, cartTax, clearCart} = value
    return (
    <Fragment>
    <div className="container">
    <div className="row">
    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
    <Link to="/">
    <button className="btn btn-outline-danger px-5 mb-3 text-uppercase" type="button" onClick={() => clearCart()}>
    clear cart
    </button>
    </Link>
    <h5>
    <span className="text-title">
    subtotal :</span>
    <strong>&#x20a6; {cartSubTotal}</strong>
    </h5>
    <h5>
    <span className="text-title">
    Tax :</span>
    <strong>&#x20a6; {cartTax}</strong>
    </h5>
    <h5>
    <span className="text-title">
    total :</span>
    <strong>&#x20a6; {cartTotal}</strong>
    </h5>
    <PayPalButton total={cartTotal} clearCart={clearCart} history={history}/>
    </div> 
    </div>
    </div>
    </Fragment>
    )
}
