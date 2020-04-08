import React from 'react';
import './App.css';
const Carousel = () => {
    var mug = require('./assets/img/mug.jpeg');
    var handiCraft = require('./assets/img/homeHandiCraft.jpg');
    var elephant = require('./assets/img/elephant.jpg');
    return (
        <div className="container-fluid" style={{ padding: '0px' }}>
            <div className="row">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-fluid" src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 mx-auto text-center">
                    <div className="card-custome text-center">
                        <img className="card-img-top" src={mug} alt="Card image cap" style={{ width: '300px', height: '250px' }} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card-custome text-center">
                        <img className="card-img-top" src={handiCraft} alt="Card image cap" style={{ width: '300px', height: '250px' }} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">For Similler Product</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 mx-auto text-center">
                    <div className="card-custome text-center">
                        <img className="card-img-top" src={elephant} alt="Card image cap" style={{ width: '300px', height: '250px' }} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Carousel;
