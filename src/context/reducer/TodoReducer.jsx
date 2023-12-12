import { v4 as uuId } from "uuid";

const addTodo = (state, textTitle, textAmount, textType) => {
  const newTodo = {
    id: uuId(),
    title: textTitle,
    amount: textAmount,
    type: textType,
    tag: "active",
  };

  return {
    ...state,
    todoList: [...state.todoList, newTodo],
  };
};

const removeTodoList = (state, id) => {
  const removeTodo = state.todoList.filter((todo) => todo.id !== id);

  return {
    ...state,
    todoList: removeTodo,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return addTodo(
        state,
        action.todoTitle,
        action.todoAmount,
        action.todoType
      );
    case "DELETE":
      return removeTodoList(state, action.id);
    default:
      return state;
  }
};
