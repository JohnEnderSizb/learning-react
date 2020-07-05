import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import { useAxiosGet } from '../Hooks/HttpRequests';

function Product() {
    const { id } = useParams()
    const url = `https://5f01077807605200169e6da6.mockapi.io/data/products/${id}`;

    let content = null;

    let product = useAxiosGet(url);

    if(product.error){
        content = 
            <h1>An Error Occured</h1>
    }

    if(product.loading){
        content = 
            <Loader />
    }

    if(product.data){
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>

                <div>
                    <img src={product.data.images} alt={product.data.name} />
                </div>

                <div className="font-bold text-xl mb-3">
                    {product.data.price}
                </div>

                <div className="font-bold text-xl mb-3">
                    {product.data.description}
                </div>
            </div>
         
    }
    
    return ( <div>{content}</div> )

}

export default Product;