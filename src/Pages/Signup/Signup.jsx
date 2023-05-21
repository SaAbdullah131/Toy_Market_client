import React from 'react';
import signupImage from '../../assets/login.gif'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">

                <div className="text-center lg:text-left">
                    <img src={signupImage} alt=""/>
                </div>
                <div className="card w-full max-w-sm max-h-lg shadow-2xl bg-base-100">
                    <form className="card-body">
                        <h2 className='tex-3xl text-center font-bold'>Login !!</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='tex-xl'>New in ToddlerShop ? <Link className='text-md text-bold text-orange-500' to='/login'>SignUp</Link></p>
                    </form>
                    <div className="divider text-blue-400">Login with Google</div>
                    <button className=''>
                        <FaGoogle className='mx-auto mb-3 h-[40px] w-[150px]'></FaGoogle>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;