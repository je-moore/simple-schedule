import React, { useState, useEffect } from 'react'
import Month from '../components/Month'
import MonthHeader from '../components/MonthHeader'
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
    const currentDay = monthOffset === 0 ? getDate(today) : ''
    const monthName = format(firstDateOfMonth, 'MMMM')
    return {
      monthOffset,
      currentDay,
      startingDay,
      daysInMonth,
      monthName,
    }
  }

  const initialMonth = initMonth()
  const [month, setMonth] = useState(initialMonth)
  useEffect(() => {
    setMonth(month)
  }, [month])

  const shiftMonth = increment => {
    setMonth(initMonth(month.monthOffset + increment))
  }

  return (
    <div className="calendar-month">
      <MonthHeader monthName={month.monthName} shiftMonth={shiftMonth} />
      <Month {...month} />
    </div>
  )
}

export default MonthContainer
