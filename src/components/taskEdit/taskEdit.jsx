import React from 'react'
import '../taskEdit/taskEdit.css'
// import TaskForm from '../taskForm/taskForm'
import EditForm from '../editForm/editForm'



const taskEdit = ({ setShowModal, title, descrition }) => {
    const clickHandler = () => {
        setShowModal(false);
    }

    return (
        <div className='edit_modal' onClick={clickHandler}>
            {/* <TaskForm /> */}
            <EditForm title={title} description={descrition}/>
        </div>
    )
}

export default taskEdit