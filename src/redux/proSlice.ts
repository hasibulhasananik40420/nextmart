import { createSlice } from '@reduxjs/toolkit'


const initialState  ={
    productData:[],
    userInfo :null,
    orderData:[],
    favoriteData:[]

}


export const proSlice =createSlice({
    name:'pro',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
           state.productData= action.payload
        }
    }
})


export const {addToCart} = proSlice.actions 
export default proSlice.reducer