// imports
import {configureStore, createSlice} from '@reduxjs/toolkit'

// state
const initialState = {
    value: 0
}

// create slice
const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value++
        },
        decrement: (state) => {
            state.value--
        }
    }
})

// export actions
export const {increment, decrement} = counter.actions

// store
export const store = configureStore({
    reducer: {
        counter: counter.reducer
    }
})