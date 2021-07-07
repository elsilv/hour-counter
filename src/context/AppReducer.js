export default (state, action) => {
    switch(action.type) {
        case 'DELETE_HISTORY':
            return {
                ...state, 
                usedHours: state.usedHours.filter(usedHours => usedHours.id !== action.payload)
            }
        case 'ADD_HOURS':
            return {
                ...state, 
                usedHours: [action.payload,...state.usedHours]
            }
        default:
            return state;
    }
}