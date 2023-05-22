import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import {Link} from 'react-router-dom';
const Navbar = () => {
        const{user,logOut} = useContext(AuthContext);
        const handleLogOut=()=> {
            logOut()
            .then()
            .catch()
        }
    return (
        <div className="navbar bg-indigo-100 mb-4 mt-3 rounded-md">
            <div className="flex-1">
                <Link to='/' className="text-bold text-3xl"><span className='font-extrabold text-green-500'>Toddler</span><span className='font-bold text-yellow-500'>Shop</span></Link>
            </div>
            <div className="flex items-center font-bold">
                <Link to='/' className='mr-4'>Home</Link>
                <Link to='/alltoys' className='mr-4'>AllToys</Link>
                <Link to='/Blogs' className='mr-4'>Blogs</Link>
                {
                    user ? 
                    <Link to='mytoy' className='mr-4'>MyToy</Link>:
                    ''
                }
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn  btn-circle avatar mt-3 mr-4">
                        <div className="w-10 rounded-full">
                            <img className='' src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
                        </div>
                    </label>
                    {/* <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul> */}
                   
                </div>
                {
                    user ? 
                    <button onClick={handleLogOut} className='btn btn-primary mr-4'><Link to='/login'>Logout</Link></button>:
                    <button className='btn btn-primary mr-4'><Link to='/login'>Login</Link></button>
                }
            </div>
        </div>
    );
};

export default Navbar;