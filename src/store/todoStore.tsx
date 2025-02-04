import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { persist } from "zustand/middleware";

type TodoItem = {
  id: string;
  text: string;
  isCompleted: boolean;
};
interface ItodoState {
  todos: TodoItem[];
  addTodo: (newTodo: string) => void;
  removveTodo: (todoId: string) => void;
  toggleTodo: (todo: TodoItem) => void;
  updateTodo: (todo: TodoItem) => void;
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
      updateTodo: (todo: TodoItem) => {
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
      toggleTodo: (todo: TodoItem) =>
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

// const useUserStore = create(
//   persist<userState>(
//     (set) => ({
//       userId: 0,
//       setUserId: (newUserId) => set({ userId: newUserId }),
//     }),
//     { name: "userIdStorage" }
//   )
// );

export default useTodoStore;

export type { ItodoState, TodoItem };
