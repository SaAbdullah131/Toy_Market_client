import React, { useContext, useState } from 'react';
import SignupImage from '../../assets/login.gif'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Signup = () => {
    const {createUser} = useContext(AuthContext);

    const handleSignUp = e=> {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email,password)
        .then(result=> {
            const newUser = result.user;
            console.log(newUser);
            
        })
        .catch(error=> {
            console.log(error.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Try Again',
              })
        })
    }
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">

                <div className="text-center lg:text-left">
                    <img src={SignupImage} alt=""/>
                </div>
                <div className="card w-full max-w-sm max-h-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h2 className='tex-3xl text-center font-bold'>Sign Up Here</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo url" name='photo' className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <p className='tex-xl'>Already Have an Account ? <Link className='text-md text-bold text-orange-500' to='/login'>Login</Link></p>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Signup;