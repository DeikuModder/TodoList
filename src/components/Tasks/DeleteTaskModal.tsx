import { faTrashRestoreAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SimpleTasks from "../../classes/types"
import useTasksData from "../../hooks/useTaskData";
import { useState } from "react";
import '../../styles/components/_deletetaskmodal.scss'

const DeleteTaskModal = ({ index }: {index: number}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  return (
    <>
        {
            showDeleteModal ?
            (
                <DeleteTask index={index} onClose={setShowDeleteModal}/>
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
<<<<<<< HEAD
            <div className="modalContent deleteModal">
=======
            <div className="modalContent">
>>>>>>> 4a1bc0488f98b724460301206e3d4d7aa34db31e
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