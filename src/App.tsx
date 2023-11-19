import CreateTaskModal from "./components/CreateTaskModal/CreateTaskModal"
import DisplayTask from "./components/DisplayTask/DisplayTask"
import TasksProvider from "./providers/TasksProvider"

const App = () => {

  return (
    <TasksProvider>
      <CreateTaskModal />
      <DisplayTask />
    </TasksProvider>
  )
}

export default App
