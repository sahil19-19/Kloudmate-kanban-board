import React from 'react'
import TaskForm from '../taskForm/taskForm'
import './editForm.css'

const editForm = ({ description, title }) => {
    const exitModalHandler = () => {

    }

    return (
        <div className='edit_form_modal'>
            <div
                className='modal_exit'
                onClick={exitModalHandler}>
                <i className="fa-solid fa-xmark"></i>
            </div>
            <TaskForm desc={description} title={title} button_action="edit" />
        </div>
    )
}

export default editForm