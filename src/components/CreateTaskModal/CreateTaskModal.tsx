import { Suspense, lazy, useState }  from 'react'
const ModalContent = lazy(() => import('./ModalContent'))
import '../../styles/components/_modal.scss'

const CreateTaskModal: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
     {
      openModal ? 
        <Suspense>
          <ModalContent onClose={() => {setOpenModal(false)}}/>
        </Suspense>
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
