import { useState } from 'react' 
const AddTask = ({ onAdd, onEdit }) => {
    const [task, setTask] = useState('')
    const [rate, setRate] = useState('')
    const [measure, setMeasure] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        
        if(!task) {
            alert('Please add a task')
            return
        }

        onAdd({ task, rate, measure })

        setTask('')
        setRate('')
        setMeasure('')
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input 
                type='text' 
                placeholder='Add Task' 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
            />
        </div>
        <div className='form-control'>
            <label>Rate</label>
            <input 
                type='float' 
                placeholder='$0.00' 
                value={rate}
                onChange={(e) => setRate(e.target.value)} 
            />
        </div>
        <div className='form-control'>
            <label>Measure</label>
            <input 
                type= 'text'
                placeholder='E.g. sqft, ft, etc.'
                value={measure}
                onChange={(e) => setMeasure(e.target.value)}
            />
        </div>

        <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask