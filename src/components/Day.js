import React from 'react'
import EditDay from './EditDay'
import wretch from 'wretch'

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

  const baseUrl = 'http://localhost:3001'

  const updatePlan = async (planId, plan) => {
    setEditing(-1)
    wretch(`${baseUrl}/plans/`)
      .json({
        text: plan,
        id: Number(planId),
        month: Number(planId.slice(0, 4)),
        day: Number(planId.slice(-2)),
      })
      .post()
      .json(response => {
        setPlans({ ...plans, date: response.result })
      })
  }

  return (
    <>
      {editing === id ? (
        <div>
          <EditDay
            id={id}
            plan={currentPlan ? currentPlan.text : ''}
            updatePlan={updatePlan}
            editing={editing}
            setEditing={setEditing}
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
