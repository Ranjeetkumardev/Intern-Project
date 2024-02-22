import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./PostSlice"
 import CartReducer from "./CartSlice"
const appStore = configureStore({
    reducer: {
        posts: PostReducer,
        cart : CartReducer,
    }
})

export default appStore