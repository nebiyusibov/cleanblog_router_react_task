import MainLayout from "../layout/MainLayout";
import HomePages from "../pages/HomePages";
import About from "../pages/About";
import SamplePost from "../pages/SamplePost";
import Contact from "../pages/Contact";
import { createBrowserRouter } from "react-router-dom";

export const Router=createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children:[
            
            {
                path:"/",
                element:<HomePages/>,
            },
            {
                path:"About",
                element:<About/>,
            },
            {
                path:"SamplePost",
                element:<SamplePost/>,
            },
            {
                 path:"Contact",
                element:<Contact/>,
            }
    
        ],
    },
])