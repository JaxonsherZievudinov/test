import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../reducers/todoSlice/todoSlice";

export const store = configureStore({
    reducer:{
        todo:todoSlice
    }
})