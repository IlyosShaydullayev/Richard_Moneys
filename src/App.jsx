import { useState } from "react";
import "./App.css";
import Index from "./components";
import { UserContext } from "./UserContext";
import {v4 as uuId} from 'uuid'

function App() {
  const [data, setData] = useState([]);

  const loadSavedtask = (task) => {
    const saved = localStorage.getItem('tasks')
    // if(saved)
  }

  const setSaveTasks = (task) => {
    localStorage.setItem('tasks', JSON.stringify(task))
  }

  const addTasks = (taskTitle, taskAmount, taskType) => {
    setSaveTasks([
      ...data,
      {
        title: taskTitle,
        id: uuId(),
        amount: taskAmount,
        type: taskType
      }
    ])
  }

  return (
    <>
    <UserContext.Provider value={data}>
      <Index />
    </UserContext.Provider>
    </>
  );
}

export default App;
