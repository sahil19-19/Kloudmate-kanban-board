import React, { useState } from "react";

import "./TaskForm.css";
import TaskStatus from "../taskStatus/taskStatus";
// import Filter from '../filter/filter'

const TaskForm = () => {
    const [enteredTitle, setTitle] = useState("");
    const [enteredDescription, setDescription] = useState("");
    const [enteredStatus, setStatus] = useState("todo");

    console.log(enteredStatus);

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    };
    const statusChangeHandler = (event) => {
        setStatus(event);
    };

    return (
        <div className="form">
            <form>
                <div className="task__controls">
                    <div className="task__control">
                        <label>Title</label>
                        <input
                            value={enteredTitle}
                            onChange={titleChangeHandler}
                            type="text"
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
                </div>
                <div className="task__actions">
                    <TaskStatus status={enteredStatus} onChangeStatus={statusChangeHandler}/>
                    <button type="submit" className="submit">Add Task</button>
                </div>
            </form>
            {/* <Filter /> */}
        </div>
    );
};

export default TaskForm;
