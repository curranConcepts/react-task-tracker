import {FaTimes} from 'react-icons/fa'

const Entry = ({entry, onDelete, onToggle, onEdit}) => {
  return (
    <div className={`entry ${entry.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(entry.id)}>
        <h3>
            {entry.date} 
            <FaTimes 
                style={{color: 'red', cursor: 
                'pointer'}} 
                onClick={() => onDelete(entry.id)}
            />             
        </h3>
        <p>{entry.task} - {entry.units} {entry.measure}</p>
        <p>{`$${entry.pay} in ${entry.duration} hours for $${(entry.pay / entry.duration).toFixed(2)} per hour.`}</p>
    </div>
  )
}

export default Entry