import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Month from '../components/Month'
import MonthHeader from '../components/MonthHeader'
import { setMonth } from '../actions'

const MonthWrapper = () => {
  const [monthOffset, setMonthOffset] = useState(0)
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const month = useSelector(state => state.month)

  useEffect(() => {
    dispatch(setMonth(monthOffset))
  }, [monthOffset, dispatch])

  return (
    <div className="calendar-month">
      <MonthHeader monthOffset={monthOffset} setMonthOffset={setMonthOffset} />
      <Month month={month} />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}

export default MonthWrapper
