import React,{Fragment} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

function App() {
  return (
    <Fragment>
     <Navbar></Navbar>
     <ProductList></ProductList>
     <Details></Details>
     <Cart></Cart>
     <Default></Default>
    </Fragment>
  );
}

export default App;
