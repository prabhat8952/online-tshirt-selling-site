import { createSlice } from "@reduxjs/toolkit";
// import { productList } from "../config";


const productslice=createSlice(
    {
        name:"text",
        initialState:{
            /* initialproduct:productList, */
            filteredtext:"",
        },
        reducers:{
            setfilteredtext:(state,action)=>{
                state.filteredtext=action.payload;
               
            },
        }
        
    }
)

export const {setfilteredtext} = productslice.actions;
// productSlice.js
export const selectFilteredtext = (state) => state.text.filteredtext;

export default productslice.reducer;