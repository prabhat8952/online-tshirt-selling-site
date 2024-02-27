import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import { Outlet, Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Profile from "./src/components/Profile";
import Cart from "./src/components/Cart";
import Wishlist from "./src/components/Wishlist";
import { Provider } from "react-redux";
import store from "./src/utils/store";
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