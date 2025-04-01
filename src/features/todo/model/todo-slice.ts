import { dateFormatting } from "../../../shared/utils";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: number;
  description: string;
  status: boolean;
  dateCreated: string;
};

export type TodoState = {
  todos: Todo[];
  edittingTodoId: number | null;
};

export const initialState: TodoState = {
  edittingTodoId: null,
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.unshift({
        id: Date.now(),
        status: false,
        dateCreated: dateFormatting(new Date().toUTCString()),
        description: action.payload,
      });
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    toggleStatusTodo: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, status: !todo.status } : todo
      );
    },
    saveEditTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === state.edittingTodoId ? { ...todo, description: action.payload } : todo
      );
    },
    editTodo: (state, action: PayloadAction<number | null>) => {
      state.edittingTodoId = action.payload;
    },

    cleareCompletedTodos: (state) => {
      state.todos = state.todos.filter((todo) => !todo.status);
    },
  },
});

export const {
  editTodo,
  addTodo,
  removeTodo,
  toggleStatusTodo,
  saveEditTodo,
  cleareCompletedTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
