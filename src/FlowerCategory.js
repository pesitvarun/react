import React from 'react';
import jsonData from './jsonData/flowerCategoryData.json';
import { Link } from 'react-router-dom';
const FlowerCategory = () => {
    const loadData = [...jsonData];      
    
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        {loadData.map(data =>
                            <div className="col-sm-4 mx-auto text-center" style={{padding:'18px'}}>
                                <div className="card-custome text-center">
                                    <Link to=""><img className="card-img-top" src={data.image} alt="Card image cap" style={{ width: '300px', height: '250px' }} />
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

export default FlowerCategory;
