import '../column/column.css'

const Column =  (props) => {
    return (
        <div className='column'>
            <p className='column-heading'>{props.title}</p>
            <div>

            </div>
        </div>
    );
}

export default Column;