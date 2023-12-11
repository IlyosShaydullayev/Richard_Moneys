import React, { useContext } from "react";
import { Store } from "../context/store/TodoStore";
import { FaScaleBalanced } from "react-icons/fa6";
import { GiExpense } from "react-icons/gi";
import { FaMoneyBillAlt } from "react-icons/fa";

function Header() {
  const {state, dispatch} = useContext(Store)

  return (
    <div>
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
          <FaScaleBalanced size={45}/>
          <div>
            <p>Your Balance</p>
            <br />
            <p>
              RS <span>0</span>
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: "lightblue" }}>
          <FaMoneyBillAlt size={45}/>
          <div>
            <p>Your Income</p>
            <br />
            <p>
              RS <span>0</span>
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: "blueviolet" }}>
          <GiExpense size={45}/>
          <div>
            <p>Your Expense</p>
            <br />
            <p>
              RS <span>0</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
