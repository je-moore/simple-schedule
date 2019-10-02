import React from 'react'

const Day = props => {
  const { date, startingDay } = props
  const firstDay = date === '1' ? { gridColumnStart: startingDay + 1 } : null
  return (
    <div className="calendar-day" style={firstDay}>
      {date}
    </div>
  )
}

export default Day
