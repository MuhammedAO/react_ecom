import React, { Component, createContext } from 'react'


const ProductContext = createContext();

 class ProductProvider extends Component {
    render() {
        return (
            <ProductContext.Provider value="Context says hello">
               {this.props.children} 
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer, ProductContext}
