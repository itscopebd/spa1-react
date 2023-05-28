import React, { useState } from 'react';
import Card from '../card/Card';

import Product from '../product/Product';
import "./Home.css";
const Home = () => {
    const [watchTime, setWatchTime] = useState([])
    const handleBuyBtn = (addwatchTime) => {
        const newTotalTime=[...watchTime,addwatchTime]
        setWatchTime(newTotalTime)
    }
    // console.log(watchTime)

    return (
        <div className='container row'>
            <div className="col-md-8">
                <Product handleBuyBtn={handleBuyBtn}></Product>
            </div>
            <div className="col-md-4">
                <div className="card">
                <Card watchTime={watchTime}></Card>
                </div>
            </div>
        </div>
    );
};

export default Home;