export const users_reducer = function(prevState = {}, action) {
    switch (action.type) {
        case "EDIT_USER":
            return {...prevState, currentUser: action.payload}

        case "LOGIN_USER":
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("currentUser", JSON.stringify(action.payload))
            return {...prevState, currentUser: action.payload, error: null}

        case "LOGOUT_USER":
            localStorage.removeItem("token")
            localStorage.setItem("currentUser", '')
            localStorage.setItem("feelings", '')
            return {...prevState, currentUser: {}, feelings: []}

        case "RETURNING_USER":
            return { ...prevState, currentUser: action.payload}

        case "ERROR_MESSAGE":
            return { ...prevState, error: action.payload}

        case "GET_DAYS":    
            return {...prevState, days: action.payload, isLoadingDays: false}

        case "GET_FEELINGS":    
            return {...prevState, feelings: action.payload}

        case "GET_SPECIES":
            return { ...prevState, species: action.payload}
        
        case "GET_ALL_SPECIES":
            return { ...prevState, specieses: action.payload}

        case "LOADING":   
            return {...prevState, isLoadingDays: true}
    
        default:
            return prevState
    }
}