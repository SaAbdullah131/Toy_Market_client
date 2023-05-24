import React, { useContext } from 'react';
import useTitle from '../../Title/useTitle';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateToy = () => {
    const toyLoaded = useLoaderData();
    const { _id,toy_name, img_url, seller_name, seller_email, sub_category, price,rating,available_quantity,details_description} = toyLoaded;
    const navigate = useNavigate();

   useTitle('Update Toy');
    const {user} = useContext(AuthContext);

    const handleUpdateToy = e => {
        e.preventDefault();
        const form = e.target;
        const toy_name = form.toy_name.value;
        const img_url = form.img_url.value;
        const seller_name = user?.displayName;
        const seller_email = user?.email;
        const sub_category = form.sub_category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quantity = form.quantity.value;
        const details_description = form.detail_description.value;

        const updated = {toy_name, img_url, seller_name, seller_email, sub_category, price,rating,available_quantity,details_description}

        console.log(toy_name);
        fetch(`https://toy-market-place-server-blue.vercel.app/update/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
        navigate('/mytoy');
       Swal.fire(
            'Updated Successfully'
    )
    form.reset();
}
    return (
        
            <div className="hero min-h-screen w-full bg-base-200">
                <div className="card  shadow-2xl bg-indigo-100 my-8">
                    <div className="card-body w-full">
                        <h1 className="text-5xl text-info mb-4 font-semibold text-center">Update Your TOY</h1>
                        <form onSubmit={handleUpdateToy}>
                            <div className='flex flex-col md:flex-row gap-4'>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Toy Name</span>
                                        </label>
                                        <input name='toy_name' type="text" placeholder="name" defaultValue={toy_name} className="input input-bordered"/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input name='seller_name' type="text" defaultValue={user?.displayName} placeholder="seller name" className="input input-bordered" disabled/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input name='seller_email' type="text" defaultValue={user.email} placeholder="seller email" className="input input-bordered" disabled/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input name='img_url' type="text" defaultValue={user?.img_url} placeholder="photo url" className="input input-bordered" />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Sub Category</span>
                                        </label>
                                        <input name='sub_category' type="text" defaultValue={sub_category} placeholder="Sub Category" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input name='price' type="number" defaultValue={price} placeholder="price" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input name='rating' type="number" defaultValue={rating} placeholder="rating" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input name='quantity' type="number" defaultValue={available_quantity} placeholder="quantity" className="input input-bordered" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Detail description</span>
                                </label>
                                <textarea name='detail_description' defaultValue={details_description} placeholder="description" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className=" btn btn-primary mx-auto" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    
    );
};

export default UpdateToy;