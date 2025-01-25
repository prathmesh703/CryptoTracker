import { createSlice, current } from "@reduxjs/toolkit";


 const  currencySlice = createSlice({
    name:'currency',
    initialState: {
        curr: "usd"
    },
    reducers:{
        setCurrency: (state,action)=>{
            state.curr = action.payload
        }

    },
});

export const { setCurrency } =currencySlice.actions;
export default currencySlice.reducer;