import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleToy = ({alltoy,user}) => {
console.log(user);
    // console.log(alltoy);
    const handleViewDetails=()=> {
        if(!user) {
            Swal.fire("Bro You have to Login first");
        }
    }
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
                                <Link onClick={handleViewDetails} to={`/alltoy/just/${_id}`}>
                                    <button  className='btn btn-primary'>View Details</button>
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