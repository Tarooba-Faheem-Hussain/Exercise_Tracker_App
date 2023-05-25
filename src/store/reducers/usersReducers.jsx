import { createSlice } from "@reduxjs/toolkit";

const usersReducers = createSlice({
    name: "users",
    initialState:{
        users:[
            {id: 1, name:"Tarooba"},
            {id: 2, name:"Hussain"},
        ],
    },
});
export default usersReducers.reducer;