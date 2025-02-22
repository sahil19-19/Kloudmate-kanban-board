import '../taskStatus/taskStatus.css'

const taskStatus = (props) => {
    const dropDownChangeHandler = (event) => {
        props.onChangeStatus(event.target.value);
    };

    return (
        <>
            <select
                value={props.status}
                className="task_status"
                onChange={dropDownChangeHandler}
            >
                <option value="todo">To do</option>
                <option value="in_progress">In progress</option>
                <option value="done">Done</option>
            </select>
        </>
    );
};

export default taskStatus;
