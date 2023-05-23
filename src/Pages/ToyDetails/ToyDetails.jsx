import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Title/useTitle';
import '@smastrom/react-rating/style.css'

const ToyDetails = () => {
    useTitle('Toy Details');
    const loader = useLoaderData();

    const [singleToy, setSingleToy] = useState(loader);
    const { img_url, seller_name, toy_name, seller_email, price, available_quantity,rating, details_description } = singleToy;

    return (

        <div className="hero min-h-screen">
            <div className="hero-content flex-col  lg:text-left lg:flex-row">
                <div className='text-xl w-1/2 ml-10'>
                    <p className='font-semibold mb-2'>Seller Name: {seller_name}</p>
                    <p className='font-semibold mb-2'>Toy Name: {toy_name}</p>
                    <p className='font-semibold mb-2'>Seller Email: {seller_email}</p>
                    <p className='font-semibold mb-2'>Price: {price}</p>
                    <p className='font-semibold mb-2'>Rating: <Rating
                        style={{ maxWidth: 150 }}
                        value={Math.ceil(rating)}
                        readOnly
                    ></Rating></p>
                    <p className='font-bold mb-2'>Available Quantity: {available_quantity}</p>
                    <p className='font-semibold'>Details: {details_description}</p>
                </div>
                <div>
                    <img src={img_url} className="w-full h-full shadow-xl rounded-lg " />
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;