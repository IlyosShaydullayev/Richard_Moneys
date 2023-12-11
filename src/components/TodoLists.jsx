import React, { useContext } from "react";
import { Store } from "../context/store/TodoStore";
import { FaTrash } from 'react-icons/fa';
import { onDelete } from "../context/action/TodoAction";

function TodoLists() {
  const { state, dispatch } = useContext(Store);

  return (
    <div>
      <div>
        <p style={{ fontSize: "25px" }}>History</p>
        <div className="footer-header">
          <p>Title</p>
          <p>Amount</p>
          <p>Type</p>
        </div>

        {state.todoList.map((item) => (
          <div key={item.id}>
            <div className="map-div">
              <p>{item.title}</p>
              <p>{item.amount}</p>
              <p>{item.type}</p>

              <FaTrash
                style={{ cursor: "pointer" }}
                onClick={() => onDelete(item.id, dispatch)}
                size={18}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoLists;
