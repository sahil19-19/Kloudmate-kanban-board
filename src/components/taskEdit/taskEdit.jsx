import React from 'react'
import '../taskEdit/taskEdit.css'
import EditForm from '../editForm/editForm'

const taskEdit = () => {
    return (
        <div className='edit_modal' >
            <EditForm />
        </div>
    )
}

export default taskEdit