import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import About from './About';
import Analytics from './Analytics';
import Footer from './Footer';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Route path="/analytics" component={Analytics} />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
      </div>
    </BrowserRouter>
  );
}
const Home = () => {
  return (
    <div>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="img-fluid" src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="img-fluid" src="https://thumbs.dreamstime.com/b/dead-tree-tall-portrait-view-blue-sky-background-57002950.jpg" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="img-fluid" src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg" alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <Footer />
    </div>


  )
}

export default App;
