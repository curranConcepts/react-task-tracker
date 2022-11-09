import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle, onEdit}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onEdit(task.id)}>
        <h3>
            {task.task} 
            <FaTimes 
              style={{color: 'red', cursor: 
              'pointer'}} 
              onClick={() => onDelete(task.id)}
            />   
        </h3>
        <p>${task.rate} {task.measure}</p>
    </div>
  )
}

export default Task