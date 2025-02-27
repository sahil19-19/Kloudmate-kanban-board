import React, { useContext, useState, useEffect  } from 'react'
import '../taskCard/taskCard.css'
import { AppContext } from '../contexts/appContext'
import TaskEdit from '../taskEdit/taskEdit'

const taskCard = ({ title, description, taskIndex, status }) => {
    const {tasks, setTasks} = useContext(AppContext);
    const [showModal, setShowModal] = useState(false);

    const taskDeleteHandler = () => {
        const newTasks = tasks.filter((task, index) => index != taskIndex)
        setTasks(newTasks);
    }
    
    const openModalHandler = () => {
        setShowModal(true);
    }

    const hideModalHandler = () => {
        setShowModal(false);
    }

    // useEffect(() => {
    //     const handleOutsideClick = () => hideModalHandler();
    //     document.addEventListener("click", handleOutsideClick);
    //     return () => document.removeEventListener("click", handleOutsideClick);
    //   }, []);

    return (
        <div className='task_card' >
            {showModal && <TaskEdit title={title} description={description} />}
            <p className='task_title'>{title}</p>
            <div className='task_desc'>
                {description}
            </div>
            <div className='task_card_footer'>
                <div className='taskStatus'>
                    {status}
                </div>
                <div className='task_card_actions'>
                    <div
                        className='task_edit'
                        onClick={openModalHandler}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div
                        className='task_delete'
                        onClick={taskDeleteHandler}>
                        <i className="fa-solid fa-trash delete_icon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default taskCard