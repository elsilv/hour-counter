// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
        case 'GET_WORKINGHOURS':
            return {
                ...state,
                usedHours: action.payload
            }
        case 'WORKINGHOURS_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'DELETE_HISTORY':
            return {
                ...state, 
                usedHours: state.usedHours.filter(usedHours => usedHours._id !== action.payload)
            }
        case 'ADD_HOURS':
            return {
                ...state, 
                usedHours: [...state.usedHours, action.payload]
            }
        default:
            return state;
    }
}