import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
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
  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasksList}/>
      </div>

  )
}

export default App
