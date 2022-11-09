import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import Entries from './components/Entries'
import AddTask from './components/AddTask'
import AddEntry from './components/AddEntry'



const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [showAddEntry, setShowAddEntry] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: 'Laminate floor install',
      rate: 2.00,
      measure: 'sqft',
    },
    {
      id: 2,
      task: 'Cove base install',
      rate: 1.00,
      measure: 'ft',
    },
    {
      id: 3,
      task: 'Tear-out',
      rate: 1.00,
      measure: 'sqft',
    },
    {
      id: 4,
      task: 'Floor prep',
      rate: 0.10,
      measure: 'sqft',
    },
  ])
  const [entries, setEntries] = useState([
    {
      id: 1,
      task: 'Laminate floor install',
      date: '2021-08-01',
      pay: 400.00,
      measure: 'sqft',
      units: 580,
      duration: 6,
    },
    {
      id: 2,
      task: 'Cove base install',
      date: '2021-08-01',
      pay: 150.00,
      measure: 'ft',
      units: 150,
      duration: 2.5,
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

    // Edit Task
    const editTask = (id) => {
      const taskToEdit = tasks.find((task) => task.id === id)
      setTasks(tasks.map((task) => task.id === id ? {...task, task: taskToEdit} : task))
    }

    // Add Entry
    const addEntry = (entry) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newEntry = { id, ...entry }
      setEntries([...entries, newEntry])
    }
  
    // Delete Entry
    const deleteEntry = (id) => {
      setEntries(entries.filter((entry) => entry.id !== id))
    }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: 
        !task.reminder } : task
      )
    )
  }



  return (
    <div className='app'>
    <div className="table">
    <div className="container">
      <Header title='Tasks' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder} onEdit={editTask} />
      ) : (
        'No Tasks To Show'
      )}
    </div>

    <div className="container">
      <Header title='Entries' onAdd={() => setShowAddEntry(!showAddEntry)} showAdd={showAddEntry}/>
      {showAddEntry && <AddEntry onAdd={addEntry}/>}
      {entries.length > 0 ? (
        <Entries entries={entries} onDelete=
        {deleteEntry} onToggle={toggleReminder} />
      ) : (
        'No Entries To Show'
      )}
    </div>

    </div>

    <Footer /> 

    </div>
  )
}

export default App;
