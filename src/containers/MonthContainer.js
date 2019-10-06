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
    const monthNumber = format(firstDateOfMonth, 'yyMM')
    return {
      monthOffset,
      currentDay,
      startingDay,
      daysInMonth,
      monthName,
      monthNumber,
    }
  }

  // structure of month
  const initialMonth = initMonth()
  const [month, setMonth] = useState(initialMonth)
  const shiftMonth = increment => {
    setMonth(initMonth(month.monthOffset + increment))
  }

  // plans for each day of the month
  const baseUrl = 'http://localhost:3001'
  const [hasError, setErrors] = useState(false)
  const [plans, setPlans] = useState({})
  async function fetchPlans(monthNumber) {
    const res = await fetch(`${baseUrl}/plans/${monthNumber}`)
    res
      .json()
      .then(res => {
        // convert array of date plans to object of plans keyed by date
        const plans = res.result.reduce((obj, plan) => {
          obj[plan.day] = plan
          return obj
        }, {})
        setPlans(plans)
      })
      .catch(err => setErrors(err))
  }

  // render calendar when month changes
  useEffect(() => {
    setMonth(month)
    fetchPlans(month.monthNumber)
  }, [month])

  return (
    <div className="calendar-month">
      <MonthHeader monthName={month.monthName} shiftMonth={shiftMonth} />
      <Month {...month} plans={plans} />
    </div>
  )
}

export default MonthContainer
