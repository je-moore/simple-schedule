import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Day from '../components/Day'
import EditDay from '../components/EditDay'

const DayContainer = ({ id, date, startingDay, currentDay }) => {
  const editing = useSelector(state => state.editing)

  const firstDay = date === '1' ? { gridColumnStart: startingDay + 1 } : null
  const current = currentDay.toString() === date ? 'today' : null
  return editing === currentDay.toString() ? (
    <EditDay />
  ) : (
    <Day firstDay={firstDay} current={current} date={date} />
  )
}

export default DayContainer
