import React, { useContext, useState, useEffect } from "react";
import "../taskCard/taskCard.css";
import { AppContext } from "../contexts/appContext";
import { TaskCardContext } from "../contexts/taskCardContext";
import TaskEdit from "../taskEdit/taskEdit";

const TaskCard = ({ title, description, taskIndex, status, key }) => {
    const { tasks, setTasks, setDraggedCard } = useContext(AppContext);
    const [showModal, setShowModal] = useState(false);

    const dragStartHandler = () => {
        setDraggedCard(taskIndex);
    };

    const dragEndHandler = () => {
        setDraggedCard(null);
    };

    const taskDeleteHandler = () => {
        const newTasks = tasks.filter((task, index) => index != taskIndex);
        setTasks(newTasks);
    };

    const openModalHandler = () => {
        setShowModal(true);
    };

    return (
        <TaskCardContext.Provider
            value={{
                title,
                description,
                setShowModal,
                status,
                taskDeleteHandler,
                showModal,
            }}
        >
            <div
                className="task_card"
                draggable="true"
                onDragStart={dragStartHandler}
                onDragEnd={dragEndHandler}
            >
                {showModal && <TaskEdit />}
                <div className="task_card_footer">
                    <div className="taskStatus">{status}</div>
                    <div className="task_card_actions">
                        <div className="task_edit" onClick={openModalHandler}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </div>
                        <div
                            className="task_delete"
                            onClick={taskDeleteHandler}
                        >
                            <i className="fa-solid fa-trash delete_icon"></i>
                        </div>
                    </div>
                </div>
                <p className="task_title">{title}</p>
                <div className="task_desc">{description}</div>
            </div>
        </TaskCardContext.Provider>
    );
};

export default TaskCard;
