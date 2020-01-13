import React, { Component, Fragment } from 'react'
import Product from './Product'
import Title from './Title'


export default class ProductList extends Component {
    state={
        products:[]
        }
    render() {
        return (
        <Fragment>   
        <div className="py-5">
        <div className="container">
        <Title name="Our" title="products"/>
        <div className="row">
        </div>      
        </div>
        </div>
        </Fragment>
        )
    }
}
