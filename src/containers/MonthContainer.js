import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Month from '../components/Month'
import MonthHeader from '../components/MonthHeader'
import { setMonth } from '../actions'

const MonthContainer = () => {
  const [monthOffset, setMonthOffset] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setMonth(monthOffset))
  }, [monthOffset])

  const state = useSelector(state => state.month)

  return (
    <div className="calendar-month">
      <MonthHeader monthOffset={monthOffset} setMonthOffset={setMonthOffset} />
      <Month />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}

export default MonthContainer
