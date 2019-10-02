import React from 'react'

const Day = props => {
  const { date, startingDay, currentDay } = props
  const firstDay = date === '1' ? { gridColumnStart: startingDay + 1 } : null
  const current = currentDay.toString() === date ? 'today' : null
  return (
    <div className={['calendar-day', current].join(' ')} style={firstDay}>
      {date}
    </div>
  )
}

export default Day
