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
        case 'CHANGE_COMPILED':
            return {
                ...state, 
                projects: state.projects.map(project => {
                    return {
                       ...project,
                       compiled: !project.compiled
                    }
                })
            }    
        default:
            return state;
    }
}