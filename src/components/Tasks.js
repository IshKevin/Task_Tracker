import Task  from "./Task"

const Tasks = ({tasks}) => {
  return (
    <>
    {
        tasks.map( (tasks) => 
        ( <Task key={tasks.id} task= {tasks} />
        ))
    }
    </>
  )
}

export default Tasks 
