import React from 'react'

const MonthHeader = props => {
  const { monthName, shiftMonth } = props

  return (
    <div className="month-header">
      <h2 className="month-name">{monthName}</h2>
      <span className="prev-month shift-month" onClick={() => shiftMonth(-1)}>
        ◀&nbsp;
      </span>
      <span className="next-month shift-month" onClick={() => shiftMonth(1)}>
        &nbsp;▶
      </span>
    </div>
  )
}

export default MonthHeader
