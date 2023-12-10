import React, { useReducer, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { FaTrash } from "react-icons/fa";

function Index({ addTasks, onDelete }) {
  const data = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('Income')

  const arrGeneral = []
  const arrMap = data.map((item) => (
     arrGeneral.push(item.amount) 
  ))
  const arrReduce = arrGeneral.reduce((acc, curVal) => Number(acc) + Number(curVal), 0)

  const arrExpense = []
  const arrExpenseMap = data.map((item) => {
    if(item.type === 'Expense'){
      arrExpense.push(item.amount) 
    }
})
  const arrExpenseReduce = arrExpense.reduce((acc, curVal) => Number(acc) + Number(curVal), 0)

  const arrIncome = []
  const arrIncomeMap = data.map((item) => {
    if(item.type === 'Income'){
          arrIncome.push(item.amount) 
        }
})
  const arrIncomeReduce = arrIncome.reduce((acc, curVal) => Number(acc) + Number(curVal), 0)

  const handleAddTask = () => {
    addTasks(title, amount, type);
    window.location.reload()
  };

  return (
    <>
      <div className="header-div">
        <p
          style={{ fontSize: "30px", fontWeight: "600", marginBottom: "15px" }}
        >
          Hi, Richard
        </p>
        <p>
          Welcome back to your <a href="#">Money Manager</a>
        </p>
      </div>

      <div className="body-div">
        <div style={{ backgroundColor: "yellowgreen" }}>
          <img src="" alt="" />
          <div>
            <p>Your Balance</p>
            <br />
            <p>
              RS <span>{arrReduce}</span>
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: "lightblue" }}>
          <img src="" alt="" />
          <div>
            <p>Your Income</p>
            <br />
            <p>
              RS <span>{type === 'Income' ? arrIncomeReduce : arrIncome}</span>
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: "blueviolet" }}>
          <img src="" alt="" />
          <div>
            <p>Your Expense</p>
            <br />
            <p>
              RS <span>{type === 'Expense' ? arrExpenseReduce : arrExpense}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-div">
        <div>
          <p style={{ fontSize: "25px" }}>Add Transaction</p>
          <br />
          <br />
          <label>Tilte</label>
          <br />
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />

          <label htmlFor="">Amount</label>
          <br />
          <input
            type="number"
            placeholder="Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />

          <label htmlFor="">Type</label>
          <br />
          <select style={{ padding: "5px 10px", borderRadius: "5px" }} onChange={(e) => setType(e.target.value)} defaultValue={type}>
            <option type='Income'>Income</option>
            <option type='Expense'>Expense</option>
          </select>
          <br />

          <button onClick={handleAddTask}>Add</button>
        </div>

        <div>
          <p style={{ fontSize: "25px" }}>History</p>
          <div className="footer-header">
            <p>Title</p>
            <p>Amount</p>
            <p>Type</p>
          </div>

          {data.map((item, i) => (
            <div key={i}>
              <div className="map-div">
                <p>{item.title}</p> 
                <p>{item.amount}</p>
                <p>{item.type}</p>

                <FaTrash
                  style={{ cursor: "pointer" }}
                  onClick={() => onDelete(item.id)}
                />
              </div>

            </div>
          ))}
          
        </div>
      </div>
    </>
  );
}

export default Index;
