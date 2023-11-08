import { useState, FormEventHandler } from "react"
import useTasksData from "../../hooks/useTaskData"
import SimpleTask from "../../classes/SimpleTask"
import '../../styles/components/_modal.scss'


type ContentProps = {
    onClose: () => void
}
  
const ModalContent: React.FC<ContentProps> = ({ onClose }) => {
    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('')
    const useTaskValue = useTasksData()
    const {taskArray, setTaskArray} = useTaskValue;
  
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault()
      const task = new SimpleTask(title, priority)
      setTaskArray([
        ...taskArray,
        task
      ])
      onClose()
    }
  
    return (
      <div id='modalScreen'>
        <div id='modalContent'>
          <div id='btnContainer'>
            <button
              className='closeBtn'
              onClick={onClose}
            >
              X
            </button>
          </div>
  
          <div id='modalMainForm'>
            <form onSubmit={handleSubmit} name="newTaskData">
              <div>
                <label>
                  Task title:
                  <input 
                    value={title}
                    onChange={(e) => (setTitle(e.target.value))}
                    type='text' 
                    required
                  />
                </label>

                <label htmlFor='priority'>
                  Priority:
                  <select 
                    value={priority}
                    onChange={(e) => {setPriority(e.target.value)}}
                    id='priority' 
                    name='priority' 
                    required
                  >
                    <option defaultValue=''>Select priorotiy</option>
                    <option value='Highly Important'>Highly Important</option>
                    <option value='Important'>Important</option>
                    <option value='Normal'>Normal</option>
                    <option value='Not important'>Not important</option>
  
                  </select>
                </label>
              </div>
                
              <input type='submit' value='Create task' className="submitBtn"/>
            </form>
            </div>  
        </div>
      </div>
    )
}

export default ModalContent