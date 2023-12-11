import React from 'react'
import TodoForm from '../components/TodoForm'
import TodoLists from '../components/TodoLists'

function TodoContainer() {
  return (
    <div className='footer-div'>
        <TodoForm/>
        <TodoLists/>
    </div>
  )
}

export default TodoContainer