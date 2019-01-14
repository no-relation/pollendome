export const users_reducer = function(prevState = {}, action) {
    switch (action.type) {
        case "ADD_USER":
            return prevState            
    
        case "DELETE_USER":
            return prevState

        case "EDIT_USER":
            return prevState

        case "LOGIN_USER":
            return {...prevState, currentUser: action.payload}

        case "LOGOUT_USER":
            return {...prevState, currentUser: ''}

        default:
            return prevState
    }
}