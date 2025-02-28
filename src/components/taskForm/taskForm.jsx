import React, { useState, useContext } from "react";

import "./taskForm.css";
import TaskStatus from "../taskStatus/taskStatus";
import { AppContext } from "../contexts/appContext";
// import Filter from '../filter/filter'

const TaskForm = ({
    button_action,
    title,
    desc,
    status,
    exitModalHandler,
    taskIndex,
}) => {
    const { tasks, setTasks } = useContext(AppContext);

    const [enteredTitle, setTitle] = useState(title);
    const [enteredDescription, setDescription] = useState(desc);
    const [enteredStatus, setStatus] = useState(status);

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    };
    const statusChangeHandler = (event) => {
        setStatus(event);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (button_action === "Edit") {
            // taskDeleteHandler();
            const temp = tasks.filter((task, index) => index !== taskIndex);
            if(status === enteredStatus)
                temp.splice(taskIndex , 0, {
                    enteredTitle,
                    enteredDescription,
                    enteredStatus,
                });
            else {
                temp.push({
                    enteredTitle,
                    enteredDescription,
                    enteredStatus,
                })
            }
            setTasks(temp);
            exitModalHandler();
        } else {
            setTasks((prev) => {
                // adding new value to the tasks array
                return [
                    ...prev,
                    {
                        enteredTitle,
                        enteredDescription,
                        enteredStatus,
                    },
                ];
            });
            setTitle("");
            setDescription("");
        }
    };

    return (
        <div className="form">
            <form onSubmit={formSubmitHandler}>
                <div className="task__controls">
                    <div className="task__control">
                        <label>Title</label>
                        <input
                            value={enteredTitle}
                            onChange={titleChangeHandler}
                            type="text"
                            required
                        />
                    </div>
                    <div className="task__control">
                        <label>Description</label>
                        <input
                            value={enteredDescription}
                            onChange={descriptionChangeHandler}
                            type="text"
                        />
                    </div>
                    <div className="task__control">
                        <label>Status</label>
                        <TaskStatus
                            status={enteredStatus}
                            onChangeStatus={statusChangeHandler}
                        />
                    </div>
                </div>
                <div className="task__actions">
                    <button type="submit" className="submit">
                        {button_action}
                    </button>
                </div>
            </form>
            {/* <Filter /> */}
        </div>
    );
};

export default TaskForm;
