import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/UserSlice";

export default configureStore({
    reducer: {
        users: usersReducer,
    },
});