import React, { useContext } from 'react';
import useTitle from '../../Title/useTitle';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
const UpdateToy = () => {
   useTitle('Update Toy');
    const {user} =useContext(AuthContext);

    const handleAddNewToy = e => {
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

        const newToyAdded = { toy_name, img_url, seller_name, seller_email, sub_category, price,rating,available_quantity,details_description}

        fetch('https://toy-market-place-server-blue.vercel.app/add-a-toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToyAdded)
        })
       Swal.fire(
            'New Toy Added Successfully'
    )
    form.reset();
}
    return (
        
            <div className="hero min-h-screen w-full bg-base-200">
                <div className="card  shadow-2xl bg-indigo-100 my-8">
                    <div className="card-body w-full">
                        <h1 className="text-5xl text-info mb-4 font-semibold text-center">Add A New TOY</h1>
                        <form onSubmit={handleAddNewToy}>
                            <div className='flex flex-col md:flex-row gap-4'>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Toy Name</span>
                                        </label>
                                        <input name='toy_name' type="text" placeholder="name" className="input input-bordered" defaultValue={toy_name} />
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
                                        <input name='img_url' type="text" placeholder="photo url" className="input input-bordered" />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Sub Category</span>
                                        </label>
                                        <input name='sub_category' type="text" placeholder="Sub Category" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input name='price' type="number" placeholder="price" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input name='rating' type="number" placeholder="rating" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input name='quantity' type="number" placeholder="quantity" className="input input-bordered" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Detail description</span>
                                </label>
                                <textarea name='detail_description' placeholder="description" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className=" btn btn-primary mx-auto" value="UpdateToy" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    
    );
};

export default UpdateToy;