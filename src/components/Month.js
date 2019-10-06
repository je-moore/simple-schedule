import React from 'react'
import Day from '../components/Day'

const Month = ({ currentDay, startingDay, daysInMonth, monthName, plans }) => {
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
            key={monthName + (index + 1)}
            date={(index + 1).toString()}
            startingDay={startingDay}
            currentDay={currentDay}
            plan={plans[index + 1]}
          />
        ))}
      </div>
    </div>
  )
}

export default Month
