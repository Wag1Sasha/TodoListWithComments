import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { TodoList } from './Components/Todolist/Todolist'
import { TodoForm } from './Components/Forms/TodoForm'
import { CommentList } from './Components/Comments/CommentsList'
import { CommentForm } from './Components/Forms/CommentForm'

import './App.css'

const initState = {
  todos: [],
  comments: [],
  currentID: -1,
}

const App = () => {
  const [state, setState] = useState(initState)

  useEffect(() => {
    const t = JSON.parse(window.localStorage.getItem('todos'))
    if (t) setState((state) => ({ ...state, todos: t }))
    const c = JSON.parse(window.localStorage.getItem('comments'))
    if (c) setState((state) => ({ ...state, comments: c }))
    const i = window.localStorage.getItem('currentID')
    if (i) setState((state) => ({ ...state, currentID: i }))
  }, [])

  const updateStateComments = (action, { id, comment }) => {
    switch (action) {
      case 'ADD': {
        const commentsChange = [...state.comments, comment]
        window.localStorage.setItem('comments', JSON.stringify(commentsChange))
        setState((state) => ({ ...state, comments: commentsChange }))
        break
      }
      case 'DELETE': {
        const commentsChange = state.comments.filter((comment) => comment.id !== id)
        window.localStorage.setItem('comments', JSON.stringify(commentsChange))
        setState((state) => ({ ...state, comments: commentsChange }))
        break
      }
      default: {
        break
      }
    }
  }

  const updateStateTodos = (action, { id, todo, event }) => {
    switch (action) {
      case 'ADD': {
        const todosChange = [...state.todos, todo]
        window.localStorage.setItem('todos', JSON.stringify(todosChange))
        setState((state) => ({ ...state, todos: todosChange }))
        break
      }
      case 'DELETE': {
        window.localStorage.setItem('currentID', '')
        const todosChange = state.todos.filter((todo) => id !== todo.id)
        const commentsChange = state.comments.filter((comment) => comment.todoID !== id)
        window.localStorage.setItem('comments', JSON.stringify(commentsChange))
        window.localStorage.setItem('todos', JSON.stringify(todosChange))
        setState((state) => ({
          ...state,
          todos: todosChange,
          comments: commentsChange,
          currentID: '',
        }))
        break
      }
      case 'MARK': {
        const todosChange = state.todos.map((todo) => (id === todo.id ? { ...todo, completed: !todo.completed } : todo))
        window.localStorage.setItem('todos', JSON.stringify(todosChange))
        setState((state) => ({ ...state, todos: todosChange }))
        break
      }
      case 'SELECT': {
        window.localStorage.setItem('currentID', id)
        setState((state) => ({ ...state, currentID: id }))
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
        <TodoList todos={state.todos} updateState={updateStateTodos} currentID={state.currentID} />
      </div>
      <div className='container'>
        <CommentForm currentTodoID={state.currentID} updateState={updateStateComments} />
        <CommentList
          comments={state.comments.filter((comment) => comment.todoID === state.currentID)}
          updateState={updateStateComments}
        />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
