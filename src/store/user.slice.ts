
import { createSlice } from '@reduxjs/toolkit'

interface IUserReducer {
    isLoggedIn: boolean,
    authToken: string | null
}

const initialState: IUserReducer = {
    isLoggedIn: false,
    authToken: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.authToken = action.payload
            state.isLoggedIn = true;
        },
        logoutUser: (state, action) => {
            state.isLoggedIn = false;
            state.authToken = null;
        }
    }

})

export const {
    loginUser, logoutUser
} = userSlice.actions

const userReducer = userSlice.reducer;

export default userReducer