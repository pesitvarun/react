import React from 'react';
import './App.css';
const Carousel = () => {
    var mug = require('./assets/img/mug.jpeg');
    var handiCraft = require('./assets/img/homeHandiCraft.jpg');
    var elephant = require('./assets/img/elephant.jpg');
    return (
        <div class="container-fluid" style={{ padding: '0px' }}>
            <div class="row">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="img-fluid" src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg" alt="First slide" />
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
            </div>
            <div class="row">
                <div class="col-sm-4 mx-auto text-center">
                    <div class="card-custome text-center">
                        <img class="card-img-top" src={mug} alt="Card image cap" style={{ width: '300px', height: '250px' }} />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div class="card-body">
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card-custome text-center">
                        <img class="card-img-top" src={handiCraft} alt="Card image cap" style={{ width: '300px', height: '250px' }} />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div class="card-body">
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">For Similler Product</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 mx-auto text-center">
                    <div class="card-custome text-center">
                        <img class="card-img-top" src={elephant} alt="Card image cap" style={{ width: '300px', height: '250px' }} />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div class="card-body">
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Carousel;
