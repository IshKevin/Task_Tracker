import { useState } from "react"
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasksList, setTasks]= useState([
    {
        id: 1,
        text: "Meet with doctor",
        day: "feb 2nd at  5:50pm",
        reminder: true,
    },
  
    {
        id: 2,
        text: "Go to school ",
        day: "feb 3rd  at 1:30pm",
        reminder: true,
    },
    {
        id: 3,
        text: "Shopping",
        day: "feb 2nd at 3:40AM",
        reminder: true,
    }
  ])
  
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasksList, newTask])

  }

  const ToggleReminder = (id) => {
    setTasks(
      tasksList.map((Task) =>
      Task.id === id ? {...Task, reminder : !Task.reminder} : Task
    ))
  }

  const deleteTask = ( id) =>{
    setTasks(tasksList.filter( (Task) => Task.id !== id))
  }
  return (
    <div className="App">
      <Header onAdd={ ()=> setShowAddTask (!showAddTask)} />

      <AddTask onAdd={addTask} />
     { tasksList.length > 0 ? 
     <Tasks tasks={tasksList} onDelete={deleteTask} onToggle={ToggleReminder}/>
    :'No Tasks to show'}
      </div>

  )
}

export default App
