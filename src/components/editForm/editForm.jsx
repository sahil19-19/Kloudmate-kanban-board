import React from 'react'
import TaskForm from '../taskForm/taskForm'
import './editForm.css'

const editForm = ({description, title}) => {
  return (
    <div className='edit_form_modal'>
        <TaskForm desc={description} title={title} button_action="edit"/>
    </div>
  )
}

export default editForm