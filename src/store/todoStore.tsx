import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { persist } from "zustand/middleware";

interface todoItemProps {
  id: string;
  text: string;
  isCompleted: boolean;
}
interface todoState {
  todos: todoItemProps[];
  addTodo: (newTodo: string) => void;
  removveTodo: (todoId: string) => void;
  toggleTodo: (todo: todoItemProps) => void;
  updateTodo: (todo: todoItemProps) => void;
}

const useTodoStore = create(
  persist<todoState>(
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
      updateTodo: (todo: todoItemProps) => {
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
      toggleTodo: (target: todoItemProps) =>
        set((state) => ({
          todos: state.todos.map(
            (_todo) => ({
              ..._todo,
              isCompleted:
                _todo.id === target.id
                  ? !target.isCompleted
                  : _todo.isCompleted,
            }),
            false
          ),
        })),
    }),
    { name: "userIdStorage" }
  )
);

export default useTodoStore;

export type { todoState, todoItemProps };
