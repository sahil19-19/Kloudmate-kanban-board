import { useContext } from "react";

import "../column/column.css";
import TaskCard from "../taskCard/taskCard";
import { AppContext } from "../contexts/appContext";
import DropZone from "../dropZone/dropZone";

const Column = ({ title, status }) => {
    const { tasks } = useContext(AppContext);
    return (
        <div className="column">
            <p className="column-heading">{title}</p>
            <DropZone status={status} index={0}/>
            <div>
                {tasks.map(
                    (task, index) =>
                        task.enteredStatus == status && (
                            <>
                                <TaskCard
                                    title={task.enteredTitle}
                                    description={task.enteredDescription}
                                    status={task.enteredStatus}
                                    taskIndex={index}
                                />
                                <DropZone status={status} index={index+1}/>
                            </>
                        )
                )}
            </div>
        </div>
    );
};

export default Column;
