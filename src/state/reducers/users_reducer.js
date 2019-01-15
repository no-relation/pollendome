export const users_reducer = function(prevState = {}, action) {
    switch (action.type) {
        case "EDIT_USER":
            return {...prevState, currentUser: action.payload}

        case "LOGIN_USER":
            localStorage.setItem("token", action.payload.token)
            return {...prevState, currentUser: action.payload}

        case "LOGOUT_USER":
            localStorage.removeItem("token")
            return {...prevState, currentUser: ''}

        default:
            return prevState
    }
}