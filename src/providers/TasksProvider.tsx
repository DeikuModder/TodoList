import React from 'react'
import SimpleTasks from '../classes/types'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const TaskContext = React.createContext({} as ReturnType<typeof useTaskValue>) //little cheat, since i know all my components will be inside this context

interface ProviderProps {
    children: JSX.Element | JSX.Element[]
}

interface TaskProps {
  taskArray: SimpleTasks[],
  setTaskArray: React.Dispatch<React.SetStateAction<SimpleTasks[]>>
}

const useTaskValue = (): TaskProps => {
  const [taskArray, setTaskArray] = useLocalStorage('tasks', [])

  return {
    taskArray,
    setTaskArray
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
