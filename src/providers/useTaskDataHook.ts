import {useContext} from 'react'
import { TaskContext } from './TasksProvider'

const useTasksData = () => {
    return useContext(TaskContext)
}

export default useTasksData