import React, { useContext } from "react";
import TaskForm from "../taskForm/taskForm";
import "./editForm.css";
import { TaskCardContext } from "../contexts/taskCardContext";

const EditForm = () => {
    const { setShowModal, description, title, status, taskDeleteHandler, taskIndex } =
        useContext(TaskCardContext);
    const exitModalHandler = () => {
        setShowModal(false);
    };

    return (
        <div className="edit_form_modal">
            <div className="modal_exit" onClick={exitModalHandler}>
                <i className="fa-solid fa-xmark"></i>
            </div>
            <TaskForm
                status={status}
                desc={description}
                title={title}
                button_action="Edit"
                taskDeleteHandler={taskDeleteHandler}
                exitModalHandler={exitModalHandler}
                taskIndex={taskIndex}
            />
        </div>
    );
};

export default EditForm;
