export const users_reducer = function(prevState = {}, action) {
    switch (action.type) {
        case "EDIT_USER":
            return {...prevState, currentUser: action.payload}

        case "LOGIN_USER":
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("currentUser", JSON.stringify(action.payload))
            return {...prevState, currentUser: action.payload}

        case "LOGOUT_USER":
            localStorage.removeItem("token")
            localStorage.setItem("currentUser", '')
            return {...prevState, currentUser: ''}

        case "RETURNING_USER":
            return { ...prevState, currentUser: action.payload}

        case "GET_DAYS":    
            return {...prevState, days: action.payload}
    
        default:
            return prevState
    }
}