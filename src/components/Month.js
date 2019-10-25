import React from 'react'
import DayWrapper from '../containers/DayWrapper'

const Month = ({ month }) => {
  return (
    Object.keys(month).length > 0 && (
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
            <DayWrapper
              key={month.monthName + (index + 1)}
              id={month.monthId + ('0' + (index + 1)).slice(-2)}
              date={index + 1}
              startingDay={month.startingDay}
              currentDay={month.currentDay}
              plan={month.plans ? month.plans[index + 1] : null}
            />
          ))}
        </div>
      </div>
    )
  )
}

export default Month
