import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import {ButtonContainer} from './Button'
export default class Details extends Component {
    render() {
        return (
           <ProductConsumer>
            {value=>{
          const {id, company, img, info, price, title, inCart } =  value.detailProduct
          return (
              <div className="container py-5">
                {/* title */}
                <div className="row">
                <div className="col-10 mx-auto text-blue text-center">
                 <h1>{title}</h1>
                </div>
                </div>
                {/* end of title */}
                {/* product info */}
                <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                <img src={img} alt="" className="img-fluid"/>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                 <h2> model : {title}</h2>
                  <h5 className="text-title text-muted text-uppercase mt-3 mb-2">
                  made by : <span className="text-uppercase">
                      {company}
                  </span>
                  </h5>
                  <h4 className="text-blue">
                <strong>
                price : <span>$</span>{price}
                </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about the product:
                  </p>
                  <p className="text-muted lead">
                  {info}
                  </p>
                  {/* buttons */}
                  <div>
                 <Link to="/">
                 <ButtonContainer>
                     Back to products
                 </ButtonContainer>
                 </Link>
                 <ButtonContainer
                 cart
                 disabled = {inCart? true : false}
                 onClick={() => {
                    value.addToCart(id);
                 }}
                 >
                 {inCart ? 'inCart' : 'add to cart'}
                 </ButtonContainer>
                  </div>
                </div>
                </div>
                {/* end of product info */}
              </div>
          )
            }}
           </ProductConsumer>
        )
    }
}
