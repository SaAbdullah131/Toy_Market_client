import React from 'react';
import { Link } from 'react-router-dom';

const SingleToy = ({alltoy,user}) => {
    // console.log(alltoy);
    
    return (
        <>
        {
            alltoy.map(toy=> {
                const{seller_name,toy_name,sub_category,price,available_quantity,_id} = toy;
                return (
                        <tr key={toy._id}>
                            <td></td>
                            <td>{seller_name}</td>
                            <td>{toy_name}</td>
                            <td>{sub_category}</td>
                            <td>{price}</td>
                            <td>{available_quantity}</td>
                            <td>
                                <Link to={`/alltoy/just/${_id}`}>
                                    <button className='btn btn-primary'>View Details</button>
                                </Link>
                            </td>
                        </tr>
                    )
            })
        }
        </>
    );
};

export default SingleToy;