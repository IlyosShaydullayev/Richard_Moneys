import React, { useReducer, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext";

function Index() {
    const data = useContext(UserContext)
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
          <TbMoneybag style={{fontSize: "45px", border: "2px solid", borderRadius:"100%", color: "white", padding: "5px 5px"} }/>
          <div>
            <p>Your Balance</p>
            <br />
            <p>
              RS <span>{arrReduce}</span>
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: "lightblue" }}>
          <FaArrowDown style={{fontSize: "45px", border: "2px solid", borderRadius:"100%", color: "white", padding: "5px 5px"} }/>
          <div>
            <p>Your Income</p>
            <br />
            <p>
              RS <span>{type === 'Income' ? arrIncomeReduce : arrIncome}</span>
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: "blueviolet" }}>
          <FaArrowUp style={{fontSize: "45px", border: "2px solid", borderRadius:"100%", color: "white", padding: "5px 5px"} }/>
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
          <select style={{ padding: "5px 10px", borderRadius: "5px" }}>
            <option>Income</option>
            <option>Expense</option>
          </select><br />

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
