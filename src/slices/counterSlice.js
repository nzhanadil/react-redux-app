import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {value: 0, pending: true}

export const callApi = createAsyncThunk('counter/callApi', async()=> {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = res.json()
    return data
})

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state) => {state.value += 1},
        decrement: (state) => {state.value -= 1},
        reset: (state) => {state.value = 0}
    }, 
    extraReducers: (builder) => {
        builder.addCase(callApi.pending, () => {
            console.log("pending")
        }).addCase(callApi.fulfilled, (state, actions) => {
            console.log("fulfilled")
            state.products = actions.payload
        }).addCase(callApi.rejected, (state) => {
            console.log("rejected")
            state.pending = false
        })
    }
})

export const {increment, decrement, reset} = counterSlice.actions
export default counterSlice.reducer;