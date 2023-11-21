import { Suspense, lazy } from "react";
const SimpleTask = lazy(() => import('../Tasks/SimpleTask'))
import '../../styles/components/_displaytask.scss'
import useTasksData from "../../hooks/useTaskData";

const DisplayTask = () => {
  const useTaskValue = useTasksData();
  const { taskArray, tasksChecked } = useTaskValue;

  return (
    <>
      <ul className="taskDisplayer">
        <Suspense>
          <SimpleTask />
        </Suspense>
      </ul>
      <progress value={tasksChecked} max={taskArray.length} className="taskProgress"/>
      <p>{tasksChecked}/{taskArray.length} tasks completed</p>
    </>
  )
}

export default DisplayTask
