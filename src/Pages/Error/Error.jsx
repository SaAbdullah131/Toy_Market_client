import React from 'react';
import ErrorImg from '../../assets/error.gif'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
           
                <img className='mx-auto' src={ErrorImg} />
                <button className='btn btn-warning ml-80'><Link  to='/' className='content-center '>Back to Homepage</Link></button>
            
        </>
    )
}

export default Error;