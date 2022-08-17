import React from "react";
import "./style.css";

function Todo({ todo, onDelete, onEdit }) {
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.todoDesc}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => onDelete(todo.id)}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => onEdit(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;

