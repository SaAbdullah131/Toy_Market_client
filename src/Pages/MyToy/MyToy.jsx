import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MySingleToy from './MySingleToy/MySingleToy';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [alltoy, setAllToy] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`https://toy-market-place-server-blue.vercel.app/mytoy?userEmail=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            if(!data.error){
                setAllToy(data);
            }
            else{
                navigate('/');
            }
        })
    }, []);
    
    const {_id} = alltoy;
    console.log(alltoy);
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-market-place-server-blue.vercel.app/delete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = alltoy.filter(cof => cof._id !== _id)
                            setAllToy(remaining)
                        }
                    })

            }
        })
    }

    return (
            <div className='p-3'>
                <table className='table w-full'>
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    <MySingleToy alltoy={alltoy} user={user} handleDelete={handleDelete}></MySingleToy>
                    </tbody>
                </table>
            </div>
    );
};

export default MyToys;