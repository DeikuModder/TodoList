import useTasksData from "../../hooks/useTaskData"
import '../../styles/components/_displaytask.scss'
import DeleteTaskModal from "./DeleteTaskModal"
import TaskCheckbox from "./TaskCheckbox";

const SimpleTask = () => {
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
              <TaskCheckbox index={index} task={task}/>
              <DeleteTaskModal index={index} task={task}/>
            </div>
          </li>
        )
      })
     }
    </>
  )
}

export default SimpleTask
