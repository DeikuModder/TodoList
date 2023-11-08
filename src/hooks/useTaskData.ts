import {useContext} from 'react'
import { TaskContext } from '../providers/TasksProvider'

const useTasksData = () => {
    return useContext(TaskContext)
}

export default useTasksData