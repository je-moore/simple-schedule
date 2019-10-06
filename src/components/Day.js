import React from 'react'

const Day = ({ date, startingDay, currentDay, plan }) => {
  const firstDay = date === '1' ? { gridColumnStart: startingDay + 1 } : null
  const current = currentDay.toString() === date ? 'today' : null
  return (
    <div className={['calendar-day', current].join(' ')} style={firstDay}>
      <span className="calendar-day-date">{date}</span>
      <div className="calendar-day-plan">{plan ? plan.text : null}</div>
    </div>
  )
}

export default Day
