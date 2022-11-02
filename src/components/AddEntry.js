import { useState } from 'react' 
const AddEntry = ({ onAdd }) => {
    const [task, setTask] = useState('')
    const [date, setDate] = useState('')
    const [pay, setPay] = useState('')
    const [measure, setMeasure] = useState('')
    const [units, setUnits] = useState('')
    const [duration, setDuration] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        
        if(!task) {
            alert('Please add a task')
            return
        }

        onAdd({ task, date, pay, measure, units, duration })

        setTask('')
        setDate('')
        setPay('')
        setMeasure('')
        setUnits('')
        setDuration('')
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
            <label>Date</label>
            <input
                type='date'
                placeholder='YYYY-MM-DD'
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Pay</label>
            <input
                type='float'
                placeholder='$0.00'
                value={pay}
                onChange={(e) => setPay(e.target.value)}
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
        <div className='form-control'>
            <label>Units</label>
            <input
                type= 'float'
                placeholder='E.g. 100, 1.5, etc.'
                value={units}
                onChange={(e) => setUnits(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Duration in hours</label>
            <input
                type= 'float'
                placeholder='E.g. 1.5, 2.5, etc.'
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
            />
        </div>

        <input type='submit' value='Save Entry' className='btn btn-block' />
    </form>
  )
}

export default AddEntry