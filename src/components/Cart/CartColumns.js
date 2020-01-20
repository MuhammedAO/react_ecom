import React from 'react'

export default function CartColumns() {
    return (
    <div className="container-fluid text-center d-none d-lg-block">
    <div className="row">

    <div className="col-10 mx-auto col-lg-2">
    <h6 className="text-uppercase">products</h6>  
    </div>  

    <div className="col-10 mx-auto col-lg-2">
    <h6 className="text-uppercase">name of product</h6>  
    </div> 

    <div className="col-10 mx-auto col-lg-2">
    <h6 className="text-uppercase">price</h6>  
    </div> 

    <div className="col-10 mx-auto col-lg-2">
    <h6 className="text-uppercase">quantity</h6>  
    </div>

    <div className="col-10 mx-auto col-lg-2">
    <h6 className="text-uppercase">remove</h6>  
    </div> 

    <div className="col-10 mx-auto col-lg-2">
    <h6 className="text-uppercase">total</h6>  
    </div>  

    </div>
    </div>
    )
}