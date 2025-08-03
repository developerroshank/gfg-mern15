import { createSlice, nanoid } from "@reduxjs/toolkit";
import AddTodo from "../AddTodo";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload.text,
                completed: false,
            };
            state.push(newTodo)
        }
    }
});

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;