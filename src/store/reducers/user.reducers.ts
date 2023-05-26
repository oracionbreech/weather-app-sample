import { AnyAction, Reducer } from "redux";


interface IUserReducerAction extends AnyAction { 
    data: any
}

interface IUserReducer {
    isLoggedIn: boolean,
    authToken: string | null
}

const initialState = {
    isLoggedIn: false,
    authToken: null
}

const userReducer: Reducer<IUserReducer, IUserReducerAction> = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return { ...state, isLoggedIn: true }
        case 'LOGOUT_USER':
            return { ...state, authToken: null, isLoggedIn: false }
        default:
            return state;
    }
}

export default userReducer