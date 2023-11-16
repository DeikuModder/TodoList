import { Suspense, lazy, useState }  from 'react'
const ModalContent = lazy(() => import('./ModalContent'))
import '../../styles/components/_modal.scss'
import { createPortal } from 'react-dom'

const CreateTaskModal: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
     {
      openModal ? 
        createPortal(
          <Suspense>
            <ModalContent onClose={() => {setOpenModal(false)}}/>
          </Suspense>,
          document.getElementById('modal')!
        )
        :
        <button 
          className='addTaskBtn'
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
