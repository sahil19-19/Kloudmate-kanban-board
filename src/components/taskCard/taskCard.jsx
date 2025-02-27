import "../taskCard/taskCard.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const TaskCard = () => {
    return (
        <div className="card">
            <p className="task_text">ncsncnskj</p>

            <div className="card_icons">
                <div
                    className="task_delete"
                    // onClick={() => handleDelete(index)}
                >
                    {/* <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
                    <i className="fa-solid fa-trash"></i>
                </div>
                <div
                    className="task_edit"
                    // onClick={() => handleEdit(index)}
                >
                    {/* <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> */}
                </div>
            </div>
        </div>
    );
}

export default TaskCard;
