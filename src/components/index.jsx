import React from "react";
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
          <img src="" alt="" />
          <div>
            <p>Your Balance</p>
            <br />
            <p>
              RS <span>0</span>
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: "lightblue" }}>
          <img src="" alt="" />
          <div>
            <p>Your Income</p>
            <br />
            <p>
              RS <span>0</span>
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: "blueviolet" }}>
          <img src="" alt="" />
          <div>
            <p>Your Expense</p>
            <br />
            <p>
              RS <span>0</span>
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
          <input type="text" placeholder="Title" />
          <br />

          <label htmlFor="">Amount</label>
          <br />
          <input type="number" placeholder="Amount" />
          <br />

          <label htmlFor="">Type</label>
          <br />
          <select style={{ padding: "5px 10px", borderRadius: "5px" }}>
            <option>Income</option>
            <option>Expense</option>
          </select><br />

          <button >Add</button>
        </div>
        <div style={{ width: "60%" }}>
          <p style={{ fontSize: "25px" }}>History</p>
          <div className="footer-header">
            <p>Title</p>
            <p>Amount</p>
            <p>Type</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
