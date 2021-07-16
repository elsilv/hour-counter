const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

// eslint-disable-next-line
export default function (state = initialState, action) {
    switch(action.type) {
        case 'USER_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'USER_LOADED':
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case 'AUTH_ERROR':
        case 'LOGIN_SUCCESS':
        case 'LOGIN_FAIL':
        case 'REGISTER_SUCCESS':
            localStorage.setItem('token, action.payload.token');
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            }    
        case 'REGISTER_FAIL':
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state;
    }
}

