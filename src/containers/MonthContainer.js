import React from 'react'
import Month from '../components/Month'
import getDate from 'date-fns/getDate'
import startOfMonth from 'date-fns/startOfMonth'
import getDaysInMonth from 'date-fns/getDaysInMonth'
import getDay from 'date-fns/getDay'
import addMonths from 'date-fns/addMonths'
import format from 'date-fns/format'

const MonthContainer = () => {
  const initMonth = (monthOffset = 0) => {
    const today = new Date()
    const firstDateOfMonth = addMonths(startOfMonth(today), monthOffset)
    const startingDay = getDay(firstDateOfMonth)
    const daysInMonth = getDaysInMonth(firstDateOfMonth)
    const currentDay = monthOffset === 0 ? getDate(today) : null
    const monthName = format(firstDateOfMonth, 'MMMM')
    return {
      currentDay,
      startingDay,
      daysInMonth,
      monthName,
    }
  }

  const init = initMonth()
  console.log(init)
  return <Month {...init} />
}

export default MonthContainer
