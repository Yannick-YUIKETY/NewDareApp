import { createSlice } from "@reduxjs/toolkit";
import { dataProducts } from "../data";


export const product = createSlice({
    name : "product" ,
    initialState: dataProducts,
    reducers:{

        asc:(state , action) => {

            console.log("store asc ") ;

            //retourne state classés par ordre croissant en comparant le prix du produit a et le prix du produit b
            return state.sort((a , b) => a.price - b.price) ;
        },

        desc:(state , action) => {

            //retourne state classés par ordre décroissant en comparant le prix du produit a et le prix du produit b
            return state.sort((a , b) => b.price - a.price) ;

        },

        init:(state , action) => {

            return dataProducts
        },
    },

})

export const {asc , desc , init} = product.actions ;

export default product.reducer