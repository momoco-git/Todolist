import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ todos, setTodos }) {

  const onDelete = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(newTodos);
  };

  const onEdit = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          Done: !todo.Done,
        };
      } else {
        return { ...todo };
      }
    });

    setTodos(newTodos);
  };

  return (
    <div className="list-container">
      <h2 className="list-title">Working.. </h2>
      <div className="list-wrapper">
        {todos.map((x) => {
          if (!x.Done) {
            return (
              <Todo
                todo={x}
                key={x.id}
                setTodos={setTodos}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">Done..! </h2>
      <div className="list-wrapper">
        {todos.map((x) => {
          if (x.Done) {
            return (
              <Todo
                todo={x}
                key={x.id}
                setTodos={setTodos}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;