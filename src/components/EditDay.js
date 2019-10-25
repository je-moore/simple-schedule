import React, { useState, useEffect, useRef } from 'react'

const EditDay = ({ firstDay, plan }) => {
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
    // updatePlan(id, text)
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
        >
          {plan}
        </textarea>
        <button>Exit</button>
      </form>
    </div>
  )
}

export default EditDay
