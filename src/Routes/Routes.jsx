import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Error from '../Pages/Error/Error'

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                  
            },
            {
                path:'alltoys',
                
            },
            {
                path:'mytoy',
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            }
        ]
    }
])

export default router;