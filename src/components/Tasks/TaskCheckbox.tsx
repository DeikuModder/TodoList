import SimpleTasks from "../../classes/types";
import useTasksData from "../../hooks/useTaskData";

type Props = {
    index: number,
    task: SimpleTasks
}

const TaskCheckbox: React.FC<Props> = ({ index, task }) => {
    const useTaskValue = useTasksData();
    const {taskArray, setTaskArray, setTasksChecked, tasksChecked} = useTaskValue;
  
    const handleCheckbox = (index: number) => {
      const taskArrayWithChecked: SimpleTasks[] = [...taskArray]
      taskArrayWithChecked[index].isChecked = !taskArrayWithChecked[index].isChecked

      taskArrayWithChecked[index].isChecked ? setTasksChecked(tasksChecked + 1) : setTasksChecked(tasksChecked - 1)
  
      setTaskArray([
        ...taskArrayWithChecked
      ])

    }
    
  return (
    <label>
        <input 
          type="checkbox" 
          id={`checkTask ${index}`}
          defaultChecked={task.isChecked}
          onClick={() => {handleCheckbox(index)
          }}
        />
    </label>
  )
}

export default TaskCheckbox
