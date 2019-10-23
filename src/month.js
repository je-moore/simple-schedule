import axios from 'axios'
import getDate from 'date-fns/getDate'
import startOfMonth from 'date-fns/startOfMonth'
import getDaysInMonth from 'date-fns/getDaysInMonth'
import getDay from 'date-fns/getDay'
import addMonths from 'date-fns/addMonths'
import isSameMonth from 'date-fns/isSameMonth'
import format from 'date-fns/format'

const today = new Date()
const baseUrl = 'http://localhost:3001'

const getMonth = monthIndex => {
  const referenceDate = addMonths(startOfMonth(today), monthIndex)

  const startingDay = getDay(referenceDate)
  const daysInMonth = getDaysInMonth(referenceDate)
  const currentDay = isSameMonth(today, referenceDate) ? getDate(today) : 0
  const monthName = format(referenceDate, 'MMMM')
  const monthId = format(referenceDate, 'yyMM')
  return {
    index: monthIndex,
    referenceDate,
    currentDay,
    startingDay,
    daysInMonth,
    monthName,
    monthId,
  }
}

const initialMonth = () => ({
  month: getMonth(0),
})

const initialPlans = {
  status: null,
  response: null,
}

const initialState = {
  ...initialPlans,
  ...initialMonth,
}

const reducer = (state = initialState, action = {}) => {
  switch (type) {
    case 'fetching':
      const newMonth = getMonth(action.monthIndex)
      return { ...initialPlans, ...newMonth, status: 'fetching' }
    case 'success':
      return { ...state, status: 'success', action.response }
    case 'error':
      return { ...state, status: 'error', action.response }
    default:
      return state
  }
}

const fetching = monthIndex => ({ type: 'fetching', monthIndex: monthIndex })
const success = response => ({ type: 'success', response })
const error = response => ({ type: 'error', response })

const useApiRequest = (monthIndex, { verb = 'get', params = {} } = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const makeRequest = async () => {
    dispatch(fetching(monthIndex))
    try {
      const response = await axios[verb](baseUrl, params)
      dispatch(success(response))
    } catch (e) {
      dispatch(error(e))
    }
  }
  return [state, makeRequest]
}

export default useApiRequest
