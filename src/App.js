import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import CustomerList from './CustomerList';
import Analytics from './Analytics';
import Footer from './Footer';
import Carousel from './Carousel';
import Login from './Login';
import Test from './Test';
import { BrowserRouter, Route } from 'react-router-dom';
import { HashRouter } from "react-router-dom";
import {withRouter} from 'react-router';

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
        <Route path="/test" component={Test} />
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
