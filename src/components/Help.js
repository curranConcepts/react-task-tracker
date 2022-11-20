import {Link} from 'react-router-dom'
import Button from './Button'

const Help = () => {
  return (
    <div>
        <h1>Help</h1>
        <p>
            * First you might like to add some tasks to track <br/>
            -click the Add button on the tasks pane<br/>
            -add task name, and how much you charge for the task (rate/measure)<br/>
            -click Save Task (your task should populate in the list)<br/>
            <br/>
            * Track your first task <br/>
            -on the Entries pane click the Add button<br/>
            -under Task enter the name of your task (will be phased out in the future as tasks will auto select)<br/>
            -record the date the task was started
            -click start to start the timer<br/>
            -when finished with task click stop button to stop timer<br/>
            -record the time under Duration in hours. Note: input should be a floating integer<br/>
            -add how many units of task were completed <br/>
            -click Save Entry to save your entry to the database<br/>
            <br/>
            * See how your hard work pays off!<br/>
            -the dashboard will track your total hours worked and total pay earned and give you an hourly average.<br/>
            -use the entries tab to view and delete all entries individually.<br/>
        </p>
        <br/>
        <Link to='/'>
          <Button color='grey' text='Go Back' onClick={<Link to='/'>Back to Dashboard</Link>} />
        </Link>
    </div>
  )
}

export default Help