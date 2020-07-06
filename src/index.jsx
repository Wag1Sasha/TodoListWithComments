/* eslint-disable default-case */
/* eslint-disable no-fallthrough */
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { TodoList } from './Components/Todolist/Todolist'
import { TodoForm } from './Components/Forms/TodoForm'
import { CommentList } from './Components/Comments/CommentsList'
import { CommentForm } from './Components/Forms/CommentForm'

import './App.css'

const App = () => {
  const [todos, setTodos] = useState([])
  const [comments, setComments] = useState([])
  const [currentID, setCurrentId] = useState('')

  useEffect(() => {
    const t = JSON.parse(window.localStorage.getItem('todos'))
    if (t) setTodos(t)
    const c = JSON.parse(window.localStorage.getItem('comments'))
    if (c) setComments(c)
    const i = window.localStorage.getItem('currentID')
    if (i) setCurrentId(i)
  }, [])

  const updateStateComments = (action, { comment }) => {
    switch (action) {
      case 'ADD': {
        const commentsChange = [...comments, comment]
        console.log(commentsChange)
        window.localStorage.setItem('comments', JSON.stringify(commentsChange))
        setComments(commentsChange)
        console.log(comments)
        break
      }
    }
  }

  const updateStateTodos = (action, { id, todo }) => {
    switch (action) {
      case 'ADD': {
        const todosChange = [...todos, todo]
        window.localStorage.setItem('todos', JSON.stringify(todosChange))
        setTodos(todosChange)
        break
      }
      case 'DELETE': {
        window.localStorage.setItem('currentID', '')
        const todosChange = todos.filter((todo) => id !== todo.id)
        const commentsChange = comments.filter((comment) => comment.todoID !== id)
        window.localStorage.setItem('comments', JSON.stringify(commentsChange))
        window.localStorage.setItem('todos', JSON.stringify(todosChange))
        setTodos(todosChange)
        setComments(commentsChange)
        setCurrentId('')
        break
      }
      case 'MARK': {
        const todosChange = todos.map((todo) => (id === todo.id ? { ...todo, completed: !todo.completed } : todo))
        window.localStorage.setItem('todos', JSON.stringify(todosChange))
        setTodos(todosChange)
        break
      }
      case 'SELECT': {
        window.localStorage.setItem('currentID', id)
        setCurrentId(id)
        break
      }
      default: {
        break
      }
    }
  }

  return (
    <div id='app'>
      <div className='container'>
        <TodoForm updateState={updateStateTodos} />
        <TodoList todos={todos} updateState={updateStateTodos} />
      </div>
      <div className='container'>
        <CommentForm currentTodoID={currentID} updateState={updateStateComments} />
        <CommentList
          todoId={currentID}
          comments={comments.filter((comment) => comment.todoID === currentID)}
          updateState={updateStateComments}
        />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
