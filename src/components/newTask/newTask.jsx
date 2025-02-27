import React from 'react'
import TaskForm from '../taskForm/taskForm'
import './newTask.css'

const newTask = () => {
  return (
    <div className='new_task'>
        <TaskForm status="todo" desc="" title="" button_action="Submit"/>
    </div>
  )
}

export default newTask