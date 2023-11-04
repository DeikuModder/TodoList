import useTasksData from "../../providers/useTaskDataHook"
import '../../styles/components/_displaytask.scss'

const DisplayTask = () => {
  const useTaskValue = useTasksData();
  const {taskArray} = useTaskValue;

  const handleCheckbox = (id: string) => {
    const checkBox: HTMLInputElement = document.getElementById(id) as HTMLInputElement
    checkBox?.classList.toggle('taskChecked', checkBox.checked)
  }

  return (
    <ul className="taskDisplayer">
     {
      taskArray.length > 0 && taskArray.map((task, index) => {
        return (
          <li key={task.title} className="tasks" id={`task${index}`}>
            <div className="leftContainer">
              <p>{task.title}</p>
              <p>{task.priority}</p>
            </div>

            <div className="rightContainer">
              <label htmlFor={`checkTask ${index}`}>
                <input 
                  type="checkbox" 
                  id={`checkTask ${index}`}
                  onChange={() => {
                    handleCheckbox(`task${index}`)
                  }}
                />
              </label>
        
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
