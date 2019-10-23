import React, { useState, useEffect, useRef } from 'react'
import { useUpdatePlan } from '../hooks'

const EditDay = ({ id, plan, plans }) => {
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

  const onSubmit = event => {
    event.preventDefault()
    plans = useUpdatePlan(id, text)
  }

  return (
    <form onSubmit={onSubmit} className="edit-day">
      <textarea
        name="text"
        rows="10"
        cols="50"
        onChange={handleInputChange}
        ref={txt}
        defaultValue={plan}
      ></textarea>
      <button>Exit</button>
    </form>
  )
}

export default EditDay
