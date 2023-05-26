
import { createSlice } from '@reduxjs/toolkit'

export interface IUserState {
    isLoggedIn: boolean,
    authToken: string | null
}

const initialState: IUserState = {
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
        logoutUser: (state) => {
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