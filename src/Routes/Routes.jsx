import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Error from '../Pages/Error/Error'
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import AllToy from '../Pages/AllToy/AllToy';
import SingleToy from "../Pages/AllToy/SingleToy";
import PrivateRouters from "./PrivateRoute";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import MyToys from "../Pages/MyToy/MyToy";
import AddToy from "../Pages/AddToy/AddToy";

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
                loader:()=>fetch(`https://toy-market-place-server-blue.vercel.app/alltoy/?limit=20`)
            },
            {
                path:'/alltoy/just/:id',
                element:<PrivateRouters><ToyDetails></ToyDetails></PrivateRouters> ,
                loader:({params})=> fetch(`https://toy-market-place-server-blue.vercel.app/alltoy/just/${params.id}`)
            },

            {
                path:'mytoy',
                element:<PrivateRouters><MyToys></MyToys></PrivateRouters>
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
                path:'/add-a-toy',
                element:<PrivateRouters><AddToy></AddToy></PrivateRouters>
            },
            {
                path:'/update/:id',
                element:<PrivateRouters></PrivateRouters>,
                loader:({params})=>fetch(``)
            }
        ]
    }
])

export default router;