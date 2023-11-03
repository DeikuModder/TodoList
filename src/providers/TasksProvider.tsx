import React, {useState} from 'react'
import SimpleTasks from '../classes/types'

export const TaskContext = React.createContext({} as ReturnType<typeof useTaskValue>) //little cheat, since i know all my components will be inside this context

interface ProviderProps {
    children: JSX.Element | JSX.Element[]
}

const useTaskValue = () => {
  const [taskArray, setTaskArray] = useState<SimpleTasks[]>([])

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
