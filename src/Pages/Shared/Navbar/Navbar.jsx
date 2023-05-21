import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    
    const [user,setUser] = useState(null);

    return (
        <div className="navbar bg-indigo-100 mb-4 mt-4 rounded-md">
            <div className="flex-1">
                <Link to='/' className="text-bold text-3xl"><span className='font-extrabold text-green-500'>Toddler</span><span className='font-bold text-yellow-500'>Shop</span></Link>
            </div>
            <div className="flex-none">
                <Link to='/'>Home</Link>
                <Link to='/alltoys'>All Toys</Link>
                <Link to='/Blogs'>Blogs</Link>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;