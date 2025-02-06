import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { persist } from "zustand/middleware";

interface ITodoItem {
  id: string;
  text: string;
  isCompleted: boolean;
}
interface ItodoState {
  todos: ITodoItem[];
  addTodo: (newTodo: string) => void;
  removveTodo: (todoId: string) => void;
  toggleTodo: (todo: ITodoItem) => void;
  updateTodo: (todo: ITodoItem) => void;
}

const useTodoStore = create(
  persist<ItodoState>(
    (set) => ({
      todos: [],
      addTodo: (newTodo) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: uuidv4(),
              text: newTodo,
              isCompleted: false,
            },
          ],
        })),
      updateTodo: (todo: ITodoItem) => {
        console.log("update", todo);
        set((state) => ({
          todos: state.todos.map((_todo) => ({
            ..._todo,
            text: _todo.id === todo.id ? todo.text : _todo.text,
          })),
        }));
      },
      removveTodo: (todoId) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== todoId),
        })),
      toggleTodo: (todo: ITodoItem) =>
        set((state) => ({
          todos: state.todos.map(
            (_todo) => ({
              ..._todo,
              isCompleted:
                _todo.id === todo.id ? !todo.isCompleted : _todo.isCompleted,
            }),
            false
          ),
        })),
    }),
    { name: "userIdStorage" }
  )
);

export default useTodoStore;

export type { ItodoState, ITodoItem };
