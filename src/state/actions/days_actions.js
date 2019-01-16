import { API } from '../API';

export const days_actions = {

    getDays(params) {
        const startdate=`${params.calDate[0].getFullYear()}-${params.calDate[0].getMonth()+1}-${params.calDate[0].getDate()}`
        const enddate=`${params.calDate[1].getFullYear()}-${params.calDate[1].getMonth()+1}-${params.calDate[1].getDate()}`
        return function (dispatch) {
            fetch(`${API}/days/find?startdate=${startdate}&enddate=${enddate}`)
                .then(resp => resp.json())
                .then(days => dispatch({ type: "GET_DAYS", payload: days }))
        }
    },
}