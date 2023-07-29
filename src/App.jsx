import { useState } from 'react'
import './App.css'

function App() {
  const [addTask, setAddTask] = useState([])

  function addaTask(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    const firstInput = formData.get("inputName")
   e.target.reset()
  
   const newTask={
    task:firstInput
   }
   setAddTask([...addTask, newTask])
    
  }

  return (
    <>
     <div className='main'>
        <form onSubmit={addaTask}>
          <label htmlFor='inputName'></label>
          <input type="text" id="inputName" name="inputName"></input>
        </form>
      <div>
        <button  className="button" type='submit'>
          Add
        </button>
      </div>
      <div>
        <span>Tasks</span>
        <ul>
          {addTask.map((task, index) => (
            <li key={index}>{task.task}</li>
          ))}
        </ul>
      </div>
     </div>
    </>
  )
}

export default App
