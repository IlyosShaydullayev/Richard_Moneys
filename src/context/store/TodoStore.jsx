import { createContext, useReducer } from "react";
import { reducer } from "../reducer/TodoReducer";

const initialState = {
    todoList: []
}

export const Store = createContext(initialState)

export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
    )
}
