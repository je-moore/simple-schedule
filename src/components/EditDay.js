import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { updatePlans } from '../actions'

const EditDay = ({ dayId, firstDay, plan }) => {
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
    <div style={firstDay}>
      <form onSubmit={onSubmit} className="edit-day">
        <textarea
          name="text"
          rows="10"
          cols="50"
          onChange={handleInputChange}
          ref={txt}
          defaultValue={text}
        ></textarea>
        <button>Exit</button>
      </form>
    </div>
  )
}

export default EditDay
