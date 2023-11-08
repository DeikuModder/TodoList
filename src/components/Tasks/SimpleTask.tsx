import useTasksData from "../../hooks/useTaskData"
import '../../styles/components/_displaytask.scss'

type Props = {
    handleCheckbox: (index: number) => void
    handleDelete: (index: number) => void
}

const SimpleTask: React.FC<Props> = ({handleCheckbox, handleDelete}) => {
  const useTaskValue = useTasksData();
  const {taskArray} = useTaskValue;

  return (
    <>
     {
      taskArray?.length > 0 && taskArray.map((task, index) => {

        return (
          <li 
            key={`#${index}${task.title}`} 
            className={`tasks ${task.isChecked ? 'taskChecked' : ''}`} 
            id={`task${index}`}
          >
            <div className="leftContainer">
              <p>{task.title}</p>
              <p 
               className={
                (task.priority === 'Highly Important') ? 
                'highPrio' : 
                (task.priority === 'Important') ? 
                'midPrio' : ''
              }
              >{task.priority}</p>
            </div>

            <div className="rightContainer">
              <label>
                <input 
                  type="checkbox" 
                  id={`checkTask ${index}`}
                  defaultChecked={task.isChecked}
                  onClick={() => {handleCheckbox(index)
                  }}
                />
              </label>
        
              <button onClick={() => {handleDelete(index)}}>Delete</button>
            </div>
          </li>
        )
      })
     }
    </>
  )
}

export default SimpleTask
