import React from 'react'

const Day = ({ firstDay, current, date, id, editDay, plan }) => {
  return (
    <div
      className={['calendar-day', current].join('')}
      style={firstDay}
      onClick={() => editDay(id)}
    >
      <span className="calendar-day-date">{date}</span>
      <pre className="calendar-day-plan">{plan}</pre>
    </div>
  )
}

export default Day
