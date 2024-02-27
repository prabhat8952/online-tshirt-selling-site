import { createSlice } from "@reduxjs/toolkit";


const cartslice=createSlice(
    {
        name:"cart",
        initialState:{
            items:[],
        },
        reducers:{
            addItems:(state,action)=>{
                state.items.push(action.payload);
            },
            clearcart:(state)=>{
                state.items=[];
            }
        }
    }
)
export const {addItems,clearcart} = cartslice.actions;
export default cartslice.reducer;