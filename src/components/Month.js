import React from 'react'
import Day from '../components/Day'
import './Month.css'

const Month = props => {
  const { currentDay, startingDay, daysInMonth, monthName } = props

  return (<div className="calendar-month">
    <h2 className="month-name">{monthName}</h2>
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
    { Array.from( Array(daysInMonth), (value, index) => 
      <Day
        key={monthName + index}
        date={(index + 1).toString()}
        startingDay={startingDay}
        currentDay={currentDay}
      />)
    }
    </div>
  </div>)
}

export default Month