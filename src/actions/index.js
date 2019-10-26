import axios from 'axios'
import { baseUrl, today } from '../constants'
import addMonths from 'date-fns/addMonths'
import startOfMonth from 'date-fns/startOfMonth'
import getDay from 'date-fns/getDay'
import getDaysInMonth from 'date-fns/getDaysInMonth'
import isSameMonth from 'date-fns/isSameMonth'
import getDate from 'date-fns/getDate'
import format from 'date-fns/format'

export const setMonth = monthOffset => dispatch => {
  const referenceDate = addMonths(startOfMonth(today), monthOffset)
  const startingDay = getDay(referenceDate)
  const daysInMonth = getDaysInMonth(referenceDate)
  const currentDay = isSameMonth(today, referenceDate) ? getDate(today) : 0
  const monthName = format(referenceDate, 'MMMM')
  const monthId = format(referenceDate, 'yyMM')
  setPlans(monthId)
  dispatch({
    type: 'SET_MONTH',
    payload: {
      offset: monthOffset,
      referenceDate,
      currentDay,
      startingDay,
      daysInMonth,
      monthName,
      monthId,
    },
  })
  dispatch(setPlans(monthId))
}

export const setPlans = monthId => dispatch => {
  axios
    .get(`${baseUrl}/plans/${monthId}`, {
      crossDomain: true,
    })
    .then(response => {
      dispatch({
        type: 'SET_PLANS',
        payload: response.data.result,
      })
    })
    .catch(error => console.log(error))
    .finally(function() {
      // always executed
    })
}

export const updatePlans = (id, text) => dispatch => {
  const monthId = Number(id.slice(0, 4))
  const day = Number(id.slice(-2))
  dispatch(setPlans(monthId))
  const data = JSON.stringify({
    id: id,
    text: text,
    month: monthId,
    day: day,
  })
  dispatch({ type: 'SET_EDITING', payload: -1 })
  axios
    .post(`${baseUrl}/plans`, data, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => {
      dispatch(setPlans(monthId))
      return response
    })
    .catch(error => console.log(error))
}
