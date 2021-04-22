import Task from './Task'

// state holds the data for a component
//the task prop is from the global state of app.js
const Tasks = ({tasks, onDelete}) => {
  
  return (
    <>
    {tasks.map((task)=>(
      //{task.id} required to remove "each child node should have unique key error"
      <Task key={task.id} task={task} onDelete={onDelete}></Task>
    ))}
    </>
  )
}

export default Tasks
