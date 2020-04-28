import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import CustomerList from './CustomerList';
import Analytics from './Analytics';
import Footer from './Footer';
import Carousel from './Carousel';
import Login from './Login';
import productCart from './productCart';
import Customizeproduct from './Customizeproduct';
import HandicraftProducts from './HandicraftProducts';
import FlowerCategory from "./FlowerCategory";
import { BrowserRouter, Route } from 'react-router-dom';
import { HashRouter } from "react-router-dom";

import { withRouter } from 'react-router';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Menu />
        <Route path="/analytics" component={Analytics} />
        <Route path="/" exact component={Home} />
        <Route path="/customerlist" component={CustomerList} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/Customizeproduct" component={Customizeproduct} />
        <Route path="/HandicraftProducts" component={HandicraftProducts} />
        <Route path="/FlowerCategory" component={FlowerCategory} />
        <Route path="/productCart" component={productCart} />
      </div>
    </HashRouter>
  );
}
const Home = () => {
  return (
    <div>

      <Carousel />
      <Footer />
    </div>


  )
}

export default App;
