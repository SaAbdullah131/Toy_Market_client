import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<h2>Hello Wrong</h2>,
        children:[
            {
                
            }
        ]
    }
])

export default router;