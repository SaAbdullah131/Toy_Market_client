import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRouters = ({children}) => {
    const{user ,loading} = useContext(AuthContext);

    const location = useLocation();
    // console.log('user in private route',user);
   if(loading) {
    return (
        <div className="radial-progress text-primary text-center" style={{"--value":70}}>70%</div>
        )
}

    if(user) {
        return children;
    }
  
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRouters;
