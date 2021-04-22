import Header from './components/Header'
import Tasks from './components/Tasks'
import Button from './components/Button'
import {useState, useEffect} from 'react';

const App = () => {
  //use state allows us to use data inside of a component or part of a component
  //Now the tasks is a part of our app level state, we can pass it as props to the <Task> component
  const [tasks,setTasks] = useState([])
  // fetch data
  useEffect(()=>{
    }
    fetchTask()
  },[])
  const fetchTask = async () => {
    const res = await fetch('http://localhost:5000/task')
    const data = await res.json()

    return data;
  const deleteTask = (id) => {
    setTasks(tasks.filter((task=>task.id !== id)))
    console.log('delete',id);
  }

  
  return (
    <div className='container'>
      <Header title="Task Tracker"/>
      <Button></Button>
      <Tasks tasks={tasks} onDelete={deleteTask}></Tasks>
    </div>
  )
}

export default App
