import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
    name:"posts",
    initialState: {
        post : null ,
    },
    reducers :{
         AllPost(state ,action) {
            state.post = action.payload
        }
    }
})

export const { AllPost} = PostSlice.actions
export default PostSlice.reducer