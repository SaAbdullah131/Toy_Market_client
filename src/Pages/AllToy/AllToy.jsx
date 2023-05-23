import Rect, { useState } from 'react';
import SingleToy from './SingleToy';
import { useLoaderData } from 'react-router-dom';

const AllToy = () => {
    const loader = useLoaderData();
    const[alltoy,setAlltoy] = useState(loader);

    return (
            <>
            <table className="table w-full py-2 mt-2 mb-2">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    <SingleToy alltoy={alltoy}></SingleToy>
                 </tbody>
                 </table>   
                </>
                )
}

export default AllToy;