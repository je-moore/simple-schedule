import React from 'react'
import { useSelector } from 'react-redux'
import Day from './Day'

const Month = () => {
  const month = useSelector(state => state.month)

  return (
    month && (
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
          {Array.from(Array(month.daysInMonth), (value, index) => (
            <Day
              key={month.monthName + (index + 1)}
              id={month.monthId + ('0' + (index + 1)).slice(-2)}
              date={(index + 1).toString()}
              startingDay={month.startingDay}
              currentDay={month.currentDay}
            />
          ))}
        </div>
      </div>
    )
  )
}

export default Month
