import React from 'react';
import { Link } from 'react-router-dom';
import jsonData from './jsonData/handiCraft.json';

const HandicraftProducts = () => {
    var mug = require('./assets/img/mug.jpeg');
    var handiCraft = require('./jsonData/handiCraft.json');
    var elephant = require('./assets/img/elephant.jpg');
    const loadData = [...jsonData];

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    {loadData.map(data =>
                        <div className="col-sm-4 mx-auto text-center" style={{padding:'18px'}}>
                            <div className="card-custome text-center">
                                <Link to="productCart"><img className="card-img-top" src={data.image} alt="Card image cap" style={{ width: '300px', height: '250px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text"></p>
                                    </div>

                                </Link>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>


    )
}

export default HandicraftProducts;
