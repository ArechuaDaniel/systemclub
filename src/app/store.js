import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../store/auth/authSlice";
import { instructorSlice } from "../store/instructor/instructorSlice";



 export const store = configureStore({
    reducer: {
        auth : authSlice.reducer,
        instructor : instructorSlice.reducer,
        
    }
})
