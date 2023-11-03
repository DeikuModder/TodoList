import React, {useState} from 'react'
import SimpleTasks from '../classes/types'

export const TaskContext = React.createContext<State>()

interface ProviderProps {
    children: JSX.Element | JSX.Element[]
}

interface State {
  taskArray: SimpleTasks[],
  setTaskArray: React.Dispatch<React.SetStateAction<SimpleTasks[]>>
}

const TasksProvider: React.FC<ProviderProps> = ({ children }) => {
  const [taskArray, setTaskArray] = useState<SimpleTasks[]>([])

  return (
    <TaskContext.Provider value={{taskArray, setTaskArray}}>
        {children}
    </TaskContext.Provider>
  )
}

export default TasksProvider
