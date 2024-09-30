// Todoを管理するステート
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  title: string;
  category: string;
  description: string;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [
    { id: 1, title: 'todo_item1', category: 'ToDo', description: 'Description for item1' },
    { id: 2, title: 'restaurant_item1', category: 'Restaurants', description: 'Description for item1' },
    { id: 3, title: 'book_item1', category: 'Books', description: 'Description for item1' },
    { id: 4, title: 'todo_item2', category: 'ToDo', description: 'Description for item2' },
    { id: 5, title: 'restaurant_item2', category: 'Restaurants', description: 'Description for item2' },
    { id: 6, title: 'book_item2', category: 'Books', description: 'Description for item2' },
    { id: 7, title: 'todo_item3', category: 'ToDo', description: 'Description for item3' },
    { id: 8, title: 'restaurant_item3', category: 'Restaurants', description: 'Description for item3' },
    { id: 9, title: 'book_item3', category: 'Books', description: 'Description for item3' },
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Todoを追加するアクション
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },
    // Todoを削除するアクション
    removeTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    // Todoを更新するアクション 
    updateTodo(state, action: PayloadAction<Todo>) {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    // Todoをリストするアクション
    listTodos(state) {
      state.todos.forEach(todo => {
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo, listTodos} = todoSlice.actions;
export default todoSlice.reducer;