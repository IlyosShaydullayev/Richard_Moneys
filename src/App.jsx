import { useEffect, useState } from "react";
import "./App.css";
import Index from "./components";
import { UserContext } from "./UserContext";
import {v4 as uuId} from 'uuid'

function App() {
  const [data, setData] = useState([]);

  const loadSavedTasks = () => {
    const saved = localStorage.getItem('tasks')
    if(saved){
      setData(JSON.parse(saved));
    }
  }

  const setTasksSave = (task) => {
    setData(task)
    localStorage.setItem('tasks', JSON.stringify(task))
  }

  useEffect(() => {
    loadSavedTasks()
  }, [])
  

  const addTask = (taskTitle, taskAmount, type) => {
    setTasksSave([
      ...data,
      {
        id: uuId(),
        title: taskTitle, 
        amount: taskAmount,
        type: type
      },
    ]);
  };

  const onDelete = (taskId) => {
    const findTask = data.filter(task => task.id !== taskId)
    setTasksSave(findTask )
  }


  return (
    <>
    <UserContext.Provider value={data}>
      <Index addTasks={addTask} onDelete={onDelete}/>
    </UserContext.Provider>
    </>
  );
}

export default App;
