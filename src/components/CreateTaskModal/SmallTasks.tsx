import { useState } from "react"

//todo: implement small tasks functionallity

const SmallTasks: React.FC = () => {
    const [addSmallTasks, setAddSmallTasks] = useState(false)
    const [amountSmallTasks, setAmountSmallTasks] = useState('')


  if (addSmallTasks) {
    return (
        <>
            <div>
                How many tasks?
                <input 
                    type="number" 
                    value={amountSmallTasks} 
                    onChange={(e) => {setAmountSmallTasks(e.target.value)}}
                    
                />
            </div>
        </>
    )
  }
  else {
    return (
        <>
            <div>
                Add sm  aller tasks?
                <button onClick={() => {setAddSmallTasks(true)}}>Yes</button>
            </div>
        </>
    )
  }
}

export default SmallTasks
