import { API } from './API';

export const actions = {

    login(loggingUser) {
        return function(dispatch){
            fetch(`${API}/auth`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify( loggingUser )
        })
            .then(resp => resp.json())
            .then(user => dispatch({ type: "LOGIN_USER", payload: user}))
        }
    },

    logout() {
        return ({ type: "LOGOUT_USER" })
    },

    addUser(payload) {
        return function(dispatch){
            fetch(`${API}/users`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify( payload )
            })
                .then(resp => resp.json())
                .then(user => dispatch({type: "LOGIN_USER", payload: user}) )
        }
    },  

    // editUser(payload) {
    //     return (dispatch) => {
    //         dispatch(type: )
    //     }
    // }
}