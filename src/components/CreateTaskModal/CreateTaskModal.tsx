import { FormEventHandler, useState }  from 'react'
import '../../styles/components/_modal.scss'
import SimpleTask from '../../classes/SimpleTask'
import useTasksData from '../../providers/useTaskDataHook'

type ContentProps = {
  onClose: () => void
}

const ModalContent: React.FC<ContentProps> = ({ onClose }) => {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('')
  const useTaskValue = useTasksData();
  const {taskArray, setTaskArray} = useTaskValue()

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
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='taskTitle'>Task title:</label>
              <input 
                value={title}
                onChange={(e) => (setTitle(e.target.value))}
                type='text' 
                id='taskTitle' 
                required
              />
            </div>
              
            <div>
              <label htmlFor='priority'>Priority:</label>
              <select 
                value={priority}
                onChange={(e) => {setPriority(e.target.value)}}
                id='priority' 
                name='priority' 
                required
              >

                <option value='Highly Important'>Highly Important</option>
                <option value='Important'>Important</option>
                <option value='Normal'>Normal</option>
                <option value='Not important'>Not important</option>

              </select>
            </div>
              

            <input type='submit' value='submit'></input>
          </form>
          </div>  
      </div>
    </div>
  )
}

const CreateTaskModal: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
     {
      openModal ? 
        <ModalContent onClose={() => {setOpenModal(false)}}/>
        :
        <button 
          style={{backgroundColor: 'darkOrange'}}
          onClick={() => {
            setOpenModal(true)
          }}
        >
          Add Task +
        </button>
     }
    </>
  )
}

export default CreateTaskModal
