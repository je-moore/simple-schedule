import React, { useState, useEffect } from 'react'
import Month from '../components/Month'
import MonthHeader from '../components/MonthHeader'
import getDate from 'date-fns/getDate'
import startOfMonth from 'date-fns/startOfMonth'
import getDaysInMonth from 'date-fns/getDaysInMonth'
import getDay from 'date-fns/getDay'
import addMonths from 'date-fns/addMonths'
import isSameMonth from 'date-fns/isSameMonth'
import format from 'date-fns/format'

const MonthContainer = () => {
  const today = new Date()

  const referenceDate = (monthOffset = 0) => {
    return addMonths(startOfMonth(today), monthOffset)
  }

  const initMonth = referenceDate => {
    const startingDay = getDay(referenceDate)
    const daysInMonth = getDaysInMonth(referenceDate)
    const currentDay = isSameMonth(today, referenceDate) ? getDate(today) : 0
    const monthName = format(referenceDate, 'MMMM')
    const monthId = format(referenceDate, 'yyMM')
    return {
      currentDay,
      startingDay,
      daysInMonth,
      monthName,
      monthId,
    }
  }

  const [month, setMonth] = useState(initMonth(referenceDate()))
  const [monthIndex, setMonthIndex] = useState(0)

  const shiftMonth = increment => {
    setMonthIndex(monthIndex => monthIndex + increment)
  }

  // plans for each day of the month
  const baseUrl = 'http://localhost:3001'
  const [hasError, setErrors] = useState(false)
  const [plans, setPlans] = useState({})
  const fetchPlans = async monthId => {
    const res = await fetch(`${baseUrl}/plans/${monthId}`)
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
    const newRefDate = referenceDate(monthIndex)
    setMonth(initMonth(newRefDate))
    fetchPlans(format(newRefDate, 'yyMM'))
  }, [monthIndex, plans])

  // which date is currently being edited
  const [editing, setEditing] = useState(-1)

  return (
    <div className="calendar-month">
      <MonthHeader monthName={month.monthName} shiftMonth={shiftMonth} />
      <Month
        {...month}
        plans={plans}
        editing={editing}
        setEditing={setEditing}
        setPlans={setPlans}
      />
    </div>
  )
}

export default MonthContainer
