import React from 'react'
import './todo.css'

export const Todo = ({ title, id, completed, updateState }) => {
  const iNCompl = (
    <span className='material-icons' onClick={() => updateState('MARK', { id })}>
      {completed ? 'check_box' : 'check_box_outline_blank'}
    </span>
  )

  return (
    <div className='todo'>
      {iNCompl}
      <p onClick={() => updateState('SELECT', { id })}> {title} </p>
      <span className='material-icons' onClick={() => updateState('DELETE', { id })}>
        delete
      </span>
    </div>
  )
}
