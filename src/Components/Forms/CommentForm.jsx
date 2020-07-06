import React from 'react'
import uniqid from 'uniqid'
import './form.css'

export const CommentForm = ({ currentTodoID, updateState }) => {
  const [comment, setComment] = React.useState('')

  const createComment = (text, todoId) => {
    return { id: uniqid.time(), todoID: currentTodoID, text: comment }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (comment.trim() === '') return
    updateState('ADD', { comment: createComment(comment, currentTodoID) })
    setComment('')
  }

  const onChange = (event) => {
    setComment(event.target.value)
  }

  return (
    <div className='form'>
      {currentTodoID ? (
        <form onSubmit={handleSubmit}>
          <h2>Add Comment to {currentTodoID}</h2>
          <input onChange={onChange} value={comment} placeholder='Add Comment'></input>
        </form>
      ) : (
        <p>Select todo to show and add comments</p>
      )}
    </div>
  )
}
