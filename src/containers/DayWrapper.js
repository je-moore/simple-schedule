import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Day from '../components/Day'
import EditDay from '../components/EditDay'

const DayWrapper = ({ id, date, startingDay, currentDay, plan }) => {
  const editing = useSelector(state => state.editing)
  const dispatch = useDispatch()

  const editDay = dayId => {
    dispatch({ type: 'SET_EDITING', payload: parseInt(dayId.slice(-2)) })
  }

  const firstDay =
    date.toString() === '1' ? { gridColumnStart: startingDay + 1 } : null
  const current = currentDay === date ? ' today' : null
  return editing === date ? (
    <EditDay firstDay={firstDay} plan={plan} dayId={id} date={date} />
  ) : (
    <Day
      firstDay={firstDay}
      current={current}
      date={date}
      id={id}
      editDay={editDay}
      plan={plan}
    />
  )
}

export default DayWrapper
