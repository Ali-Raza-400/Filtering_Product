import {createSlice} from '@reduxjs/toolkit'
import {sub} from 'date-fns'
const initialState = [
    
        {id:0,username:'Ali',email:"ali@gmail.com",description:'I am ali',timeStamp:sub(new Date(),{days:1}).toISOString()},
        {id:1,username:'Hassan',email:"hassan@gmail.com",description:'I am hassan',timeStamp:sub(new Date(),{days:2}).toISOString()},

    
]

export const blogSlice = createSlice({
    name:'blog',
    initialState,
    reducers:{
        addBlog:(state,action)=>{
            state.push(action.payload)
        },


    }
}
)

export const {addBlog}=blogSlice.actions

export default blogSlice.reducer
