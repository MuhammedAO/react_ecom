import React, { Component, Fragment } from 'react'
// import Product from './Product'
import {storeProducts} from '../data'
import Title from './Title'
import { ProductConsumer } from '../context'


export default class ProductList extends Component {
    state={
        products: storeProducts
        }
    render() {
    console.log(this.state.products)
        return (
        <Fragment>   
        <div className="py-5">
        <div className="container">
        <Title name="Our" title="products"/>
        <div className="row">
        <ProductConsumer>
        {(value) => {
        return <h1>{value}</h1>
        }}  
        </ProductConsumer>
        </div>      
        </div>
        </div>
        </Fragment>
        )
    }
}
