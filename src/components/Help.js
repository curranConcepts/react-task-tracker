const Help = () => {
  return (
    <div>
        <h1>Help</h1>
        <p>
            * First you must add some tasks to track <br/>
            -click edit tasks<br/>
            -add task name, and how much you charge for the task<br/>
            -click submit (your task should populate in the list)<br/>
            <br/>
            * Track your first task <br/>
            -on the dashboard page select your task from drop down menu<br/>
            -click start to start the timer (use the pause button for unpaid breaks)<br/>
            -when finished with task click stop button to stop timer<br/>
            -click record button to record time to 'duration' of task<br/>
            -add how many units of task were completed <br/>
            -click submit to add entry<br/>
            <br/>
            * See how your hard work pays off!<br/>
            -the dashboard will track your total hours worked and total pay earned and give you an hourly average.<br/>
            -use the entries tab to view and delete all entries individually.<br/>
        </p>
        <a href='/'>Back to Dashboard</a>
    </div>
  )
}

export default Help