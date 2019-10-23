import React from 'react'
import Day from './Day'

const Month = ({
  currentDay,
  startingDay,
  daysInMonth,
  monthName,
  monthId,
  plans,
  editing,
  setEditing,
  setPlans,
}) => {
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
            id={monthId + ('0' + (index + 1)).slice(-2)}
            date={(index + 1).toString()}
            startingDay={startingDay}
            currentDay={currentDay}
            currentPlan={plans[index + 1]}
            editing={editing}
            setEditing={setEditing}
            setPlans={setPlans}
            plans={plans}
          />
        ))}
      </div>
    </div>
  )
}

export default Month
