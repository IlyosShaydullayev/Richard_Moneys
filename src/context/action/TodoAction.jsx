export const AddTodo = (textTitle, textAmount, textType,  dispatch) => {
    dispatch({type: 'ADD_TODO', todoTitle: textTitle, todoAmount: textAmount, todoType: textType})
}

export const onDelete = (id, dispatch) => {
    dispatch({type: 'DELETE', id})
}