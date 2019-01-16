import { API } from '../API';

export const days_actions = {

    getDays(params) {

        const paddedMonth = (index) => {
            const realNum = params.calDate[index].getMonth() + 1
            return realNum.toString().padStart(2, 0)
        }

        const startdate = `${params.calDate[0].getFullYear()}-${paddedMonth(0)}-${params.calDate[0].getDate().toString().padStart(2, 0)}`
        const enddate = `${params.calDate[1].getFullYear()}-${paddedMonth(1)}-${params.calDate[1].getDate().toString().padStart(2,0)}`
        return function (dispatch) {
            fetch(`${API}/days/find?startdate=${startdate}&enddate=${enddate}`)
                .then(resp => resp.json())
                .then(days => dispatch({ type: "GET_DAYS", payload: days }))
        }
    },
}