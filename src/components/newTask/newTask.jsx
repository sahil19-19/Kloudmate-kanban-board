import React from 'react'
import TaskForm from '../taskForm/taskForm'
import './newTask.css'

const newTask = () => {
  return (
    <div className='new_task'>
        <TaskForm desc="" title="" button_action="submit"/>
    </div>
  )
}

export default newTask