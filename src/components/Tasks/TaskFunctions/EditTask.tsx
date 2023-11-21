import { useState } from "react"
import { createPortal } from "react-dom"
import useTasksData from "../../../hooks/useTaskData"
import SimpleTasks from "../../../classes/types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"

type Props = {
    index: number,
    onClose: React.Dispatch<React.SetStateAction<boolean>>
}


const EditContent: React.FC<Props> = ({ index, onClose }) => {
    const useTaskValue = useTasksData();
    const {taskArray, setTaskArray} = useTaskValue;
    const [newTitle, setNewTitle] = useState(taskArray[index].title)
    const [newPriority, setNewPriority] = useState(taskArray[index].priority)

    const handleChange = (index: number) => {
        const EditArray: SimpleTasks[] = [...taskArray]
        EditArray[index].title = newTitle
        EditArray[index].priority = newPriority

        setTaskArray([
            ...EditArray
        ])

        onClose(false)
    }

    return (
        <div className="modalScreen">
            <div className="modalContent">
                <div id='btnContainer'>
                    <button
                      className='closeBtn'
                      onClick={() => onClose(false)}
                    >
                      X
                    </button>
                </div>
  
                <div id='modalMainForm'>
                  <form onSubmit={(e) => {
                    e.preventDefault()
                    handleChange(index)
                    }} name="editTaskData">
                    <div className="formInputs">
                      <label htmlFor="newTitleInput" />
                      <div className="container">

                        <div className="leftSide">
                          <p>Title:</p>
                        </div>

                        <div className="rightSide">
                          <input 
                            value={newTitle}
                            onChange={(e) => (setNewTitle(e.target.value))}
                            type='text'
                            id="newTitleInput" 
                            required
                          />
                        </div>
                  
                    </div>

                      <label htmlFor='newPriority' />
                        <div className="container">

                          <div className="leftSide">
                            <p>Priority:</p>
                          </div>
                    
                          <div className="rightSide">
                            <select 
                              value={newPriority}
                              onChange={(e) => {setNewPriority(e.target.value)}}
                              id='newPriority' 
                              name='newPriority' 
                              required
                            >
                              <option defaultValue={taskArray[index].priority}>{taskArray[index].priority}</option>
                              <option value='Highly Important'>Highly Important</option>
                              <option value='Important'>Important</option>
                              <option value='Normal'>Normal</option>
                              <option value='Not important'>Not important</option>
  
                            </select>
                          </div>

                        </div>
                  
                
                     </div>
                
                        <input type='submit' value='Edit' className="submitBtn"/>
                   </form>
                </div>
            </div>
        </div>
    )
}

const EditTask = ({ index }: { index: number }) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
        {
            openModal ? 
            (
                createPortal(
                    <EditContent index={index} onClose={setOpenModal}/>,
                    document.getElementById('modal')!
                )
            )
            :
            (
                <button onClick={() => setOpenModal(true)} className="taskButtons">
                    <FontAwesomeIcon icon={faPen}/>
                </button>
            )
        }
    </>
  )
}

export default EditTask
