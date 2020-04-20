import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
const Carousel = () => {
    var mug = require('./assets/img/mug.jpeg');
    var handiCraft = require('./assets/img/homeHandiCraft.jpg');
    var flower = require('./assets/img/flower2.jpeg');
    var carouselFirst = require('./assets/bannerImg/banner4.jpg');
    var carouselSecond = require('./assets/img/carouselSecond.jpeg');
    return (
        <div className="container-fluid" style={{ padding: '0px' }}>
            <div className="row">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-fluid" src={carouselFirst} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src={carouselSecond} alt="Third slide" />
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
                <div className="col-sm-4 mx-auto text-center" style={{ padding: '15px' }}>
                    <div className="card-custome text-center">
                        <Link to="Customizeproduct"><img className="card-img-top" src={mug} alt="Card image cap" style={{ width: '300px', height: '250px' }} />
                            <div className="card-body">
                                <h5 className="card-title">Design Your Mug</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>

                        </Link>
                    </div>
                </div>
                <div className="col-sm-4" style={{ padding: '15px' }}>
                    <div className="card-custome text-center">
                        <Link to="HandicraftProducts">
                            <img className="card-img-top" src={handiCraft} alt="Card image cap" style={{ width: '300px', height: '250px' }} />
                            <div className="card-body">
                                <h5 className="card-title">Handicraft Products</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-sm-4 mx-auto text-center" style={{ padding: '15px' }}>
                    <div className="card-custome text-center">
                        <Link to="FlowerCategory">
                        <img className="card-img-top" src={flower} alt="Card image cap" style={{ width: '300px', height: '250px' }} />
                            <div className="card-body">
                                <h5 className="card-title">Flowers</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;
