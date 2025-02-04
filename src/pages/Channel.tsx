import React, { useState, useEffect } from "react";
import useTodoStore from "../store/todoStore";

const Channel = () => {
  const { todos, addTodo, toggleTodo, updateTodo, removveTodo } =
    useTodoStore();
  const [todoValue, setTodoValue] = useState("");
  const [updateValue, setUpdateValue] = useState("");
  const [updateState, setUpdateState] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(todoValue);
    setTodoValue("");
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <h2>Channel</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="new-todo"
            name="newTodo"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
          <button type="submit" disabled={!todoValue}>
            Add
          </button>
        </form>

        <ul>
          {todos?.map((todo) => {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  id={todo.id}
                  onChange={() => toggleTodo(todo)}
                  checked={todo.isCompleted}
                />
                <label htmlFor={todo.id}>
                  <input
                    type="text"
                    style={
                      todo.isCompleted
                        ? { textDecoration: "line-through" }
                        : undefined
                    }
                    defaultValue={todo.text}
                    onFocus={() => setUpdateState(true)}
                    onBlur={() => {
                      updateTodo({
                        id: todo.id,
                        text: updateValue == "" ? todo.text : updateValue,
                        isCompleted: todo.isCompleted,
                      });
                      setUpdateState(false);
                    }}
                    onChange={(e) => setUpdateValue(e.target.value)}
                    readOnly={!updateState}
                  />
                </label>
                <button type="button" onClick={() => removveTodo(todo.id)}>
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Channel;
