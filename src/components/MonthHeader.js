import React from 'react'
import { useSelector } from 'react-redux'

const MonthHeader = props => {
  const { monthOffset, setMonthOffset } = props
  const month = useSelector(state => state.month)

  return (
    month && (
      <div className="month-header">
        <h2 className="month-name">{month.monthName}</h2>
        <span
          className="prev-month shift-month"
          onClick={() => setMonthOffset(monthOffset - 1)}
        >
          ◀&nbsp;
        </span>
        <span
          className="next-month shift-month"
          onClick={() => setMonthOffset(monthOffset + 1)}
        >
          &nbsp;▶
        </span>
      </div>
    )
  )
}

export default MonthHeader
