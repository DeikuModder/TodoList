import useTasksData from "../../providers/useTaskDataHook"
import '../../styles/components/_displaytask.scss'

const DisplayTask = () => {
  const useTaskValue = useTasksData();
  const {taskArray} = useTaskValue()

  return (
    <ul className="taskDisplayer">
     {
      taskArray.length > 0 && taskArray.map(task => {
        return (
          <li key={task.title} className="tasks">
            <div className="leftContainer">
              <p>{task.title}</p>
              <p>{task.priority}</p>
            </div>

            <div className="rightContainer">
              <input type="checkbox"/>
              <button>Delete</button>
            </div>
          </li>
        )
      })
     }
    </ul>
  )
}

export default DisplayTask
