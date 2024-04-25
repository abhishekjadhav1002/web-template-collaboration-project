import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Profile from "./components/Profile";
import Wishlist from "./components/Wishlist";
import Bag from "./components/Bag";
import ErrorPage from "./components/ErrorPage";
import CategoryPage from "./components/CategoryPage";
import About from "./components/About";

const Applayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
       path : "/",
       element : <Applayout/>,
       children : [
        {
            path : "/",
            element : <Body/>,
         },
        {
            path : "/profile",
            element : <Profile/>,
         },
         {
            path : "/wishlist",
            element : <Wishlist/>,
         },
         {
            path : "/bag",
            element : <Bag/>,
         },
         {
            path : "/category/:id",
            element : <CategoryPage/>,
         },
         {
            path : "/about",
            element : <About/>,
         },
       ],
       errorElement : <ErrorPage/>,
    },
  
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);