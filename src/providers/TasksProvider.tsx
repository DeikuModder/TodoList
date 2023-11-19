import React from 'react'
import SimpleTasks from '../classes/types'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const TaskContext = React.createContext({} as ReturnType<typeof useTaskValue>) //little cheat, since i know all my components will be inside this context

interface ProviderProps {
    children: JSX.Element | JSX.Element[]
}

interface TaskProps {
  taskArray: SimpleTasks[],
  setTaskArray: React.Dispatch<React.SetStateAction<SimpleTasks[]>>,
  tasksChecked: number,
  setTasksChecked: React.Dispatch<React.SetStateAction<number>>
}

const useTaskValue = (): TaskProps => {
  const [taskArray, setTaskArray] = useLocalStorage('tasks', [])
  const [tasksChecked, setTasksChecked] = useLocalStorage('taskChecked', 0)

  return {
    taskArray,
    setTaskArray,
    tasksChecked,
    setTasksChecked
  }
}

const TasksProvider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <TaskContext.Provider value={useTaskValue()}>
        {children}
    </TaskContext.Provider>
  )
}

export default TasksProvider
