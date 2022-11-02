import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Entries from './components/Entries'
import AddTask from './components/AddTask'
import AddEntry from './components/AddEntry'
import Navbar from './components/NavBar'
import Home from './pages'
import Help from './pages'
import Logout from './pages/logout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




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

  // Logout
  // const logout = (req, res) => {
  //   req.logout(function(err) {
  //     if (err) { return (err); }
  //     res.redirect('/');
  //   });
  // };


  return (
    <div className='app'>
      <Router>
        <Navbar className='nav' />
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path='/logout' component={Logout} />
            <Route path='/help' component={Help} />
          </Routes>
      </Router>
    <div className="table">
    <div className="container">
      <Header title='Tasks' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder} />
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

    </div>
  )
}

export default App;
