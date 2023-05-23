import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Error from '../Pages/Error/Error'
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import AllToy from '../Pages/AllToy/AllToy';

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
                path:'alltoy',
                element:<AllToy></AllToy>,
                loader:()=>fetch(``)
            },
            {
                path:'/alltoy/:id',
                element:<h1>Hello</h1> ,
                loader:({params})=> fetch(``)
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
            },
            {
                path:'/addtoy',
            }
        ]
    }
])

export default router;