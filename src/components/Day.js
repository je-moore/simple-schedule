import React, { useState } from 'react'
import EditDay from './EditDay'

const Day = ({
  id,
  date,
  startingDay,
  currentDay,
  currentPlan,
  editing,
  setEditing,
}) => {
  const firstDay = date === '1' ? { gridColumnStart: startingDay + 1 } : null
  const current = currentDay.toString() === date ? 'today' : null

  const editDay = () => {
    setEditing(id)
  }

  const baseUrl = 'http://localhost:3001'
  const [plan, setPlan] = useState(currentPlan)

  const updatePlan = async (planId, plan) => {
    setEditing(false)
    fetch(`${baseUrl}/plans/${planId}`, {
      method: 'post',
      body: JSON.stringify(plan),
    }).then(response => {
      console.log(response)
      setPlan(response.result)
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
