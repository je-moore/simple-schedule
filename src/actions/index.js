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
}

export const setPlans = monthId => dispatch => {
  axios
    .get(`${baseUrl}/plans/${monthId}`)
    .then(response => {
      console.log(response)
      dispatch({
        type: 'SET_PLANS',
        payload: response.body,
      })
    })
    .catch(error => console.log(error))
    .finally(function() {
      // always executed
    })
}
