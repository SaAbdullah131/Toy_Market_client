import Rect, { useState } from 'react';
import SingleToy from './SingleToy';
import { useLoaderData } from 'react-router-dom';

const AllToy = () => {
    const loader = useLoaderData();
    const [alltoy, setAlltoy] = useState(loader);
    const [hide, setHide] = useState(false);

     const search = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        console.log(search);
        fetch(`https://toy-market-place-server-blue.vercel.app/alltoy?search=${search}`)
       .then(res => res.json())
       .then(data => {
        setAlltoy([]);
        setAlltoy(data);
        setHide(true);
    })
    }
    const handleShowButton = () => {
        fetch(`https://toy-market-place-server-blue.vercel.app/alltoy/?limit=0`)
            .then(res => res.json())
            .then(data => {
                setAlltoy([]);
                setAlltoy(data);
                setHide(true);
            })
    }
    return (
        <>
            <form onSubmit={search}className="form-control p-5">
                <label className="input-group flex justify-center">
                    <input  type="text" placeholder="Search Here" name="search" className="input input-bordered" />
                    <input className='btn btn-primary' type="submit" value="Search" />
                </label>
            </form>
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
            <div>
                {
                    hide ?
                        <></> :
                        <button className="btn btn-primary" onClick={handleShowButton}>Show All</button>
                }
            </div>
        </>
    )
}

export default AllToy;