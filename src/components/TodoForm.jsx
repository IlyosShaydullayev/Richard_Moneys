import React, { useContext, useState } from "react";
import { Store } from "../context/store/TodoStore";
import { AddTodo } from "../context/action/TodoAction";

function TodoForm() {
  const {state, dispatch} = useContext(Store)
  const [textTitle, setTextTitle] = useState('')
  const [textAmount, setTextAmount] = useState('')
  const [type, setType] = useState('Income')
  console.log(type);
  
  const handleClick = (e) => {
    e.preventDefault()
    AddTodo(textTitle, textAmount, type, dispatch)
    setTextTitle('')
    setTextAmount('')
    setType('')
  }

  return (
      <div>
        <p style={{ fontSize: "25px" }}>Add Transaction</p>
        <br />
        <br />
        <label>Tilte</label>
        <br />
        <input type="text" placeholder="Title" value={textTitle} onChange={(e) => setTextTitle(e.target.value)}/>
        <br />

        <label htmlFor="">Amount</label>
        <br />
        <input type="number" placeholder="Amount" value={textAmount} onChange={(e) => setTextAmount(e.target.value)}/>
        <br />

        <label htmlFor="">Type</label>
        <br />
        <select style={{ padding: "5px 10px", borderRadius: "5px" }} onChange={(e) => setType(e.target.value)} defaultValue={type}>
          <option type="Income">Income</option>
          <option type="Expense">Expense</option>
        </select>
        <br />

        <button onClick={handleClick}>Add</button>
      </div>
  );
}

export default TodoForm;
