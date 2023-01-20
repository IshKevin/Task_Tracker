import { useState } from "react" 

const Addtask = () => {
    const [text, setText] = useState ('')
    const [day, setDay] = useState ('')
    const [reminder, setreminder] = useState (false)
}

const AddTask = () => {
  return (
    <form className='add-form'>
        <div className='form-control'>
            <label>Task</label>
            <input type="text" placeholder='Add Task' value={text}/>
        </div>
        <div className='form-control'>
            <label>Day & Time </label>
            <input type="text" placeholder='Add Day & Time '/>
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder </label>
            <input type='checkbox'/>
        </div>
        <input type='submit' value=" Save Task" className='btn btn-block' />
    </form>
  )
}

export default AddTask