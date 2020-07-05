import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import { useAxiosGet } from '../Hooks/HttpRequests';


function Home() {
    let content = null;

    const url = `https://5f01077807605200169e6da6.mockapi.io/data/products?page=1&limit=10`;

    let products = useAxiosGet(url);

    // const [products, setProducts] = useState({
    //     loading: false,
    //     data: null,
    //     error: false
    // });

    // useEffect( () => {
    //     setProducts({
    //         loading:true,
    //         data: null,
    //         error: false
    //     });
    //     axios.get(url).then(
    //         response => {
    //             setProducts({
    //                 loading: false,
    //                 data: response.data,
    //                 error: false
    //             });
    //         }
    //     ).catch( () => {
    //         setProducts({
    //             loading: false,
    //             data: null,
    //             error: true
    //         });
    //     })
    // },
    //     [url]
    // );

    if(products.error){
        content = 
            <h1>An Error Occured</h1>
    }

    if(products.loading){
        content = 
            <Loader />
    }

    if(products.data){
        content =
            products.data.map((product) => 
                <div key={product.id}>
                    <ProductCard product={product} />
                </div>
            )
         
    }

    return (
        <div>
            <h1 className="font-bold text-2xl">
                The GOAT
            </h1> 
            {content}
        </div>
    )
    
}

export default Home;