import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleCard = ({ allToy, user }) => {
    console.log(allToy);
    const { _id, img_url, toy_name, price, rating } = allToy;
    const handleViewButton = () => {
        if (!user){
            Swal.fire(
                'Bro You have to Log in First',
            )
            useNavigate('/login');
        }
    }
    return (
        <div>
            <div className="card card-compact w-96 rounded-lg bg-indigo-100 shadow-xl">
                <figure><img className='h-[250px]' src={img_url}/></figure>
                <div className="card-body">
                    <h2 className="card-title text-violet-500 text-xl">{toy_name}</h2>
                    <p><span className='font-semibold'>Price: $</span> {price}</p>
                    <Rating
                        style={{ maxWidth: 150 }}
                        value={Math.ceil(rating)}
                        readOnly
                    ></Rating>
                    <div className="card-actions justify-center">
                        <Link onClick={handleViewButton} to={`/alltoy/just/${_id}`}><button className="btn btn-primary-sm">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;