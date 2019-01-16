import { API } from '../API';

export const user_actions = {

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

    deleteUser(id) {
        return function (dispatch) {
            fetch(`${API}/users/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then(() => dispatch({type: "LOGOUT_USER"}))
        }
    },

    editUser(payload) {
        return function (dispatch) {
            fetch(`${API}/users/${payload.id}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(payload)
            })
                .then(resp => resp.json())
                .then(user => dispatch({type: "EDIT_USER", payload: user}))
        }
    },

    // getDays(payload) {
    //     return
    // }
}