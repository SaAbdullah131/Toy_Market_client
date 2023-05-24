import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
const Navbar = () => {
    const { user, logOut,loading } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className="navbar bg-indigo-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <Link to='/' className="text-bold text-3xl"><span className='font-extrabold text-green-500'>Toddler</span><span className='font-bold text-yellow-500'>Shop</span>
                    </Link>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 lg:hidden">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/alltoy'>AllToy</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        {
                            user?
                            <>
                                <li><Link to='/mytoy'>MyToy</Link></li>
                                <li><Link to='/addtoy'>AddToy</Link></li>
                            </>
                            :
                            ''
                        }
                        
                       
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-bold text-xl">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/alltoy'>AllToy</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    {
                        user ?
                            <>
                                <li><Link to='/mytoy'>MyToy</Link></li>
                                <li><Link to='/add-a-toy'>AddToy</Link></li>
                            </>:
                            ''
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex items-center gap-2'>
                {
                            user && <>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            {
                                                !loading && <>
                                                    <img className={user.displayName ? 'user-img-tooltip' : ''} src={user.photoURL ? user?.photoURL : 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg'} />
                                                    <Tooltip
                                                    style={{
                                                            backgroundColor: "#1B9C85",
                                                    }}
                                                        anchorSelect='.user-img-tooltip'
                                                        content={user?.displayName}
                                                        place='left'
                                                    ></Tooltip>
                                                </>
                                            }
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-4 p-2 bg-back text-tex rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                       
                                    </ul>
                                </div>
                            </>
                        }
                    {
                        user ?
                            <button onClick={handleLogOut} className='btn btn-primary mb-2'><Link to='/'>Logout</Link></button> :
                            <button className='btn btn-primary mb-2'><Link to='/login'>Login</Link></button>
                    }
                </div>
            </div>
        </div>
    )
};

export default Navbar;