import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import { Provider } from "react-redux";
import store from "./utils/store";
const Applayout=()=>{
         
    return(
        
        <>
          <Header/>
          <Outlet/>
          <Footer />
       </>
          
        
    )
}
const approuter=createBrowserRouter([
  {
    path:"/",
    element:<Provider store={store}>
    <Applayout/>
    </Provider>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/profile",
        element:<Profile/>,
      },
      {
        path:"/cart",
        element:<Cart />,
      },
      {
        path:"/wishlist",
        element:<Wishlist />,
      }
    ]
  },
 
]);


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={approuter} />);