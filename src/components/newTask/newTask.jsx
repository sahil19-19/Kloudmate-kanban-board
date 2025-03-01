import React from 'react'
import TaskForm from '../taskForm/taskForm'
import './newTask.css'
import SearchBar from '../searchBar/searchBar'

const newTask = () => {
  return (
    <div className='new_task'>
        <TaskForm status="todo" desc="" title="" button_action="Submit"/>
        <SearchBar />
    </div>
  )
}

export default newTask