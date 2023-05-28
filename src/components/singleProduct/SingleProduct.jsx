import React from 'react';

const SingleProduct = (props) => {
    // console.log(props)
    const {movieName, poster, imdbRating, description, watchTime } = props.singleProduct;
    return (
        <div className='col-md-6'>
            <div className="card my-3">
                <img src={poster} style={{ height: "300px" }} alt="" />
                <h3>{movieName}</h3>
                <p>{description}</p>
                <div className='d-flex justify-content-between'>
                    <p>WatchTime: {watchTime}</p>
                    <p>Rating: {imdbRating}</p>
                </div>
                <button className='btn btn-info' onClick={()=>props.handleBuyBtn(watchTime)}>Buy Now</button>
            </div>
        </div>
    );
};

export default SingleProduct;