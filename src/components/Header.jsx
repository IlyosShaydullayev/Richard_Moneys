import React, { useContext, useEffect } from "react";
import { Store } from "../context/store/TodoStore";
import { FaScaleBalanced } from "react-icons/fa6";
import { GiExpense } from "react-icons/gi";
import { FaMoneyBillAlt } from "react-icons/fa";

function Header() {
  const { state, dispatch } = useContext(Store);

  const arr = [];
  useEffect(() => {
    if (state.todoList) {
      state.todoList.map((item) => {
        arr.push({ amount: item.amount, type: item.type });
      });
    }
  }, [state.todoList]);

  const arr1 = [];
  const arr2 = [];
  const arr3 = [];

  let count1;
  let count2;
  let count3;
  useEffect(() => {
    if (arr) {
      arr.map((item) => {
        arr1.push(Number(item.amount));
        count1 = arr1.reduce((acc, cur) => acc + cur, 0);
        if (item.type === "Income") {
          arr2.push(Number(item.amount));
          count2 = arr2.reduce((acc, cur) => acc + cur, 0);
        } else if (item.type === "Expense") {
          arr3.push(Number(item.amount));
          count3 = arr3.reduce((acc, cur) => acc + cur, 0);
        }
      });
    }
  }, [arr]);

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
          <FaScaleBalanced size={45} />
          <div>
            <p>Your Balance</p>
            <br />
            <p>
              RS <span>{count1}</span>
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: "lightblue" }}>
          <FaMoneyBillAlt size={45} />
          <div>
            <p>Your Income</p>
            <br />
            <p>
              RS <span>{count2}</span>
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: "blueviolet" }}>
          <GiExpense size={45} />
          <div>
            <p>Your Expense</p>
            <br />
            <p>
              RS <span>{count3}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
