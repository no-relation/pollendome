import { API } from '../API';

export const days_actions = {

    getDays(params) {
        console.log(params.dates)
        const startdate = params.dates[0].toJSON().slice(0, 10)
        const enddate = params.dates[1].toJSON().slice(0, 10)
        return function (dispatch) {
            fetch(`${API}/days/find?startdate=${startdate}&enddate=${enddate}`)
                .then(resp => resp.json())
                .then(days => dispatch({ type: "GET_DAYS", payload: days }))
        }
    },
}