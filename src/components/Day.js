import React from 'react'

const Day = ({ firstDay, current, date }) => {
  return (
    <div className={['calendar-day', current].join(' ')} style={firstDay}>
      <span className="calendar-day-date">{date}</span>
      <div className="calendar-day-plan"></div>
    </div>
  )
}

export default Day
