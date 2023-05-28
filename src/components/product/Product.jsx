import React, { useEffect,useState } from 'react';
import SingleProduct from './../singleProduct/SingleProduct';

const Product = ({handleBuyBtn}) => {
    const [product,setProduct]=useState([])
    useEffect(()=>{
fetch("data.json")
.then(res=>res.json())
.then(data=>setProduct(data))
    },[])

    return (
        <div className='row'>
            {
                product.map((singleProduct=><SingleProduct singleProduct={singleProduct} handleBuyBtn={handleBuyBtn}></SingleProduct>))
            }
        </div>
    );
};

export default Product;