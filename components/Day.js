import React from 'react'
import EditDay from './EditDay'

const Day = ({
  id,
  date,
  startingDay,
  currentDay,
  currentPlan,
  editing,
  setEditing,
  setPlans,
  plans,
}) => {
  const firstDay = date === '1' ? { gridColumnStart: startingDay + 1 } : null
  const current = currentDay.toString() === date ? 'today' : null

  const editDay = () => {
    setEditing(id)
  }

  return (
    <>
      {editing === id ? (
        <div>
          <EditDay
            id={id}
            plan={currentPlan ? currentPlan.text : ''}
            editing={editing}
            setEditing={setEditing}
            plans={plans}
          />
        </div>
      ) : (
        <div
          className={['calendar-day', current].join(' ')}
          style={firstDay}
          onClick={() => editDay(id)}
        >
          <span className="calendar-day-date">{date}</span>
          <div className="calendar-day-plan">
            {currentPlan ? currentPlan.text : null}
          </div>
        </div>
      )}
    </>
  )
}

export default Day
