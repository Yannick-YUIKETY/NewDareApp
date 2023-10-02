import { createSlice } from "@reduxjs/toolkit";


const categories = [
    { id:1 , name:'all',      },

    { id:2 , name:'php' ,     },

    { id:3 , name:'JS',       },

    { id:4 , name:'dot.net',  },
];


export const category = createSlice({
    name:"category",
    initialState : categories , 
    reducers:{
        
    }
})

export default category.reducer