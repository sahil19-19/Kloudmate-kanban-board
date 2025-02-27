import '../column/column.css'
import TaskCard from '../taskCard/taskCard'

const Column =  (props) => {
    return (
        <div className='column'>
            <p className='column-heading'>{props.title}</p>
            <div>
                <TaskCard/>
            </div>
        </div>
    );
}

export default Column;