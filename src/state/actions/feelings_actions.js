import { API } from '../API';

export const feelings_actions = {

    createFeeling(payload) {
        return function (dispatch) {
            fetch(`${API}/feelings`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(payload)
            })
                .then(resp => resp.json())
                .then(feelings => dispatch({ type: "GET_FEELINGS", payload: feelings }))
        }
    },

    getFeelings(userID) {
        return function (dispatch) {
            fetch(`${API}/feelings/?userid=${userID}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then(resp => resp.json())
                .then(feelings => dispatch({ type: "GET_FEELINGS", payload: feelings }))
        }
    }
}