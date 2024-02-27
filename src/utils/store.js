import { configureStore } from "@reduxjs/toolkit";
import productslice from "./productslice";
import cartslice from "./cartslice";

const store=configureStore(
    {
    reducer:{
        text:productslice,
        cart:cartslice,
    }
}
)
export default store;