export const users_reducer = function(prevState = {}, action) {
    switch (action.type) {
        case "ADD_USER":
            return prevState            
    
        case "DELETE_USER":
            return prevState

        case "EDIT_USER":
            return prevState

        default:
            return prevState
    }
}