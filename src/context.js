import React, { Component, createContext } from 'react'
import {storeProducts, detailProduct} from './data'


const ProductContext = createContext();

 class ProductProvider extends Component {
     state = {
     products: [],
     detailProduct,
     cart:[]
     }

     componentDidMount () {
        this.setProducts();
     }

     setProducts = () => {
      let tempProducts = []
      storeProducts.forEach(item => {
        const singleItem = {...item}
        tempProducts = [...tempProducts, singleItem]
      })
      this.setState(() => {
          return {products : tempProducts}
      })
     }

     getItem = id => {
     const product = this.state.products.find(item => item.id === id)
     return product
     }

     handleDetail = id => {
     const product = this.getItem(id);

     this.setState(() =>{
         return {detailProduct: product}
     })
     }

     addToCart = (id) => {
    let tempProd = [...this.state.products]
    const index = tempProd.indexOf(this.getItem(id))
    const product = tempProd[index]
    product.inCart = true
    product.count = 1
    const price = product.price
    product.total = price

    this.setState(() => {
    return {products: tempProd, cart:[...this.state.cart, product]}
    }, () => {console.log(this.state);
    })
     }
    render() {
        return (
            <ProductContext.Provider value={{
            ...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart
            }}>
               {this.props.children} 
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer, ProductContext}
