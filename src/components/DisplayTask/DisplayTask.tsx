import useTasksData from "../../hooks/useTaskData"
import SimpleTasks from "../../classes/types";
import { Suspense, lazy } from "react";
const SimpleTask = lazy(() => import('../Tasks/SimpleTask'))
import '../../styles/components/_displaytask.scss'

const DisplayTask = () => {
  const useTaskValue = useTasksData();
  const {taskArray, setTaskArray} = useTaskValue;

  const handleCheckbox = (index: number) => {
    const taskArrayWithChecked: SimpleTasks[] = [...taskArray]
    taskArrayWithChecked[index].isChecked = !taskArrayWithChecked[index].isChecked

    setTaskArray([
      ...taskArrayWithChecked
    ])
  }

  return (
    <ul className="taskDisplayer">
      <Suspense>
        <SimpleTask handleCheckbox={handleCheckbox}/>
      </Suspense>
    </ul>
  )
}

export default DisplayTask
