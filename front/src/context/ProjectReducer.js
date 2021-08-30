// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
        case 'GET_PROJECTS':
            return {
                ...state,
                projects: action.payload
            }
        case 'PROJECT_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'DELETE_PROJECT':
            return {
                ...state, 
                projects: state.projects.filter(projects => projects._id !== action.payload)
            }
        case 'ADD_PROJECT':
            return {
                ...state, 
                projects: [...state.projects, action.payload]
            }
        case 'CHANGE_COMPLETED':
            return {
                ...state, 
                projects: state.projects.map(project => {
                    return {
                       ...project,
                       completed: !project.completed
                    }
                })
            }    
        default:
            return state;
    }
}