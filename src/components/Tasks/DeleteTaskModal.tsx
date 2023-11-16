import { faTrashRestoreAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SimpleTasks from "../../classes/types"
import useTasksData from "../../hooks/useTaskData";
import { useState } from "react";
import '../../styles/components/_deletetaskmodal.scss'
import { createPortal } from "react-dom";

const DeleteTaskModal = ({ index }: {index: number}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  return (
    <>
        {
            showDeleteModal ?
            (
                createPortal(
                    <DeleteTask index={index} onClose={setShowDeleteModal}/>,
                    document.getElementById('modal')!
                )
            )
            :
            (
                <button onClick={() => setShowDeleteModal(true)}>
                    <FontAwesomeIcon icon={faTrashRestoreAlt}/>
                </button>
            )
        }
    </>
  )
}

type Props = {
    index: number
    onClose: React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteTask: React.FC<Props> = ({ index, onClose }) => {
    const useTaskValue = useTasksData();
    const {taskArray, setTaskArray} = useTaskValue;

    const handleDelete = (index: number) => {
        const filteredArr: SimpleTasks[] = [...taskArray]
    
        filteredArr.splice(index, 1)
    
        setTaskArray([
          ...filteredArr
        ])

        onClose(false)
    }

    return (
        <div className="modalScreen">
            <div className="modalContent deleteModal">
                <p>
                    You want to delete this task permanently?
                </p>

                <div className="btnContainer">
                    <button onClick={() => handleDelete(index)} className="deleteBtn">
                        Delete
                    </button>

                    <button onClick={() => onClose(false)} className="cancelBtn">
                        Cancel
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default DeleteTaskModal
