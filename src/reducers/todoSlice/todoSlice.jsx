import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://65.108.148.136:8080/ToDo/"

export const getTodo = createAsyncThunk("todo/getTodo",async () =>{
    try {
        let {data} = await axios.get(`${API}get-to-dos`)
        return data?.data
    }
    catch (error) {
        console.log(error)
    }
})

export const postTodo = createAsyncThunk("todo/postTodo",async (formData,{dispatch})=>{
    try {
        let {data} = await axios.post(`${API}add-to-do`,formData)
        dispatch(getTodo())
    } catch (error) {
        console.log(error);
    }
})

export const putTodo = createAsyncThunk("todo/putTodo",async (putUser,{dispatch})=>{
    try {
        let {data} = await axios.put(`${API}update-to-do`,putUser)
        dispatch(getTodo())
    } catch (error) {
        console.log(error);
    }
})

export const postImg = createAsyncThunk("todo/postImg",async (formData,{dispatch})=>{
    try {
        let {data} = await axios.post(`${API}add-to-do-images`,formData)
        dispatch(getTodo())
    } catch (error) {
        console.log(error);
    }
})

export const deleteImg = createAsyncThunk("todo/deleteImg",async (id,{dispatch})=>{
try {
    let {data} = await axios.delete(`${API}delete-to-do-image?imageId=${id}`)
    dispatch(getTodo())
} catch (error) {
    console.log(error);
}
})

export const check = createAsyncThunk("todo/check",async (id,{dispatch})=>{
    try {
        let {data} = await axios.put(`${API}is-completed?id=${id}`)
        dispatch(getTodo())
    } catch (error) {
        console.log(error);
    }
})

export const deleteTodo = createAsyncThunk("todo/deleteTodo",async (id,{dispatch})=>{
    try {
        let {data} = await axios.delete(`${API}delete-to-do?id=${id}`)
        dispatch(getTodo())
    } catch (error) {
        console.log(error);
    }
})

export const searchs = createAsyncThunk("todo/searchs",async (search)=>{
try {
    let {data} = await axios.get(`${API}get-to-dos?ToDoName=${search}`)
    return data?.data
} catch (error) {
    console.log(error);
}
})


export const getById = createAsyncThunk("todo/GetById",async (id)=>{
    try {
        let {data} = await axios.get(`${API}get-to-do-by-id?id=${id}`)
        return data?.data
    } catch (error) {
        console.log(error);
    }
})

export const todoSlice = createSlice({
    name:"todo",
    initialState:{
        data:[],

        data2:[],

        loading:false,


        name:"",
        desc:"",
        idx:null,

        search:""
    },
    reducers:{
        setName:(state,action)=>{
            state.name = action.payload
        },

        setDesc:(state,action)=>{
            state.desc = action.payload
        },

        setIdx:(state,action)=>{
            state.idx = action.payload
        },

        setSearch:(state,action)=>{
            state.search = action.payload
        }
    },

    extraReducers:(builder)=>{
        builder.addCase(getTodo.pending,(state,action)=>{
            state.loading = true
        })

        builder.addCase(getTodo.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })

        builder.addCase(getTodo.rejected,(state,action)=>{
            state.loading = false
        })



        builder.addCase(searchs.pending,(state,action)=>{
            state.loading = true
        })

        builder.addCase(searchs.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })

        builder.addCase(searchs.rejected,(state,action)=>{
            state.loading = false
        })




        builder.addCase(getById.pending,(state,action)=>{
            state.loading = true
        })

        builder.addCase(getById.fulfilled,(state,action)=>{
            state.loading = false
            state.data2 = action.payload
        })

        builder.addCase(getById.rejected,(state,action)=>{
            state.loading = false
        })
    }
})


export const {setName,setDesc,setIdx,setSearch} = todoSlice.actions

export default todoSlice.reducer