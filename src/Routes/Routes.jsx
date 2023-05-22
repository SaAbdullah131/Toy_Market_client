import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Error from '../Pages/Error/Error'
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>  
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
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