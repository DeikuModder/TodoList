import useTasksData from "../../hooks/useTaskData"
import '../../styles/components/_displaytask.scss'
import DeleteTaskModal from "./TaskFunctions/DeleteTaskModal"
import EditTask from "./TaskFunctions/EditTask";
import TaskCheckbox from "./TaskFunctions/TaskCheckbox";

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
              <div>
                <EditTask index={index}/>
                <DeleteTaskModal index={index} task={task}/>
              </div>
            </div>
          </li>
        )
      })
     }
    </>
  )
}

export default SimpleTask
