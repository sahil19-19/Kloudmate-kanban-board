import { useContext } from 'react';

import '../column/column.css'
import TaskCard from '../taskCard/taskCard';
import {AppContext} from "../contexts/appContext";

const Column = ({title, status}) => {
    const {tasks} = useContext(AppContext);
    return (
        <div className='column'>
            <p className='column-heading'>{title}</p>
            <div>
                {/* <TaskCard /> */}
                {
                    tasks.map((task, index) => 
                        task.enteredStatus == status && (
                            <TaskCard 
                                title={task.enteredTitle}
                                description = {task.enteredDescription}
                                status={task.enteredStatus}
                                taskIndex={index}
                            />
                        ))
                }
            </div>
        </div>
    );
}

export default Column;