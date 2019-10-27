import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { updatePlans } from '../actions'

const EditDay = ({ dayId, firstDay, plan, date }) => {
  const [text, setText] = useState(plan)

  useEffect(() => {
    setText(text)
  }, [text])

  // focus textarea on render
  const txt = useRef(null)
  useEffect(() => {
    txt.current.focus()
  }, [])

  const handleInputChange = event => {
    setText(event.target.value)
  }

  const dispatch = useDispatch()
  const onSubmit = event => {
    event.preventDefault()
    dispatch(updatePlans(dayId, text))
  }

  return (
    <div className="calendar-day" style={firstDay}>
      <span className="calendar-day-date">{date}</span>
      <div className="calendar-day-plan">
        <form onSubmit={onSubmit} className="edit-day">
          <textarea
            name="text"
            onChange={handleInputChange}
            ref={txt}
            defaultValue={text}
          ></textarea>
          <button>Save</button>
        </form>
      </div>
    </div>
  )
}

export default EditDay
