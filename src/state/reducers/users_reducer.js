export const users_reducer = function(prevState = {}, action) {
    switch (action.type) {
        case "ADD_USER":
            return prevState            
            break;
    
        case "DELETE_USER":
            return prevState
            break;

        case "EDIT_USER":
            return prevState
            break;

        default:
            return prevState
            break;
    }
}