import React from 'react'
import Day from '../components/Day'

const Month = props => {
  const { currentDay, startingDay, daysInMonth, monthName } = props

  return (
    <div>
      <div className="calendar-month-heading">
        <div>Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
      </div>
      <div className="calendar-month-days">
        {Array.from(Array(daysInMonth), (value, index) => (
          <Day
            key={monthName + index}
            date={(index + 1).toString()}
            startingDay={startingDay}
            currentDay={currentDay}
          />
        ))}
      </div>
    </div>
  )
}

export default Month
