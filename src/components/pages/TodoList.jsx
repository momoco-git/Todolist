import React from "react";
import "./style.css";

const TodoList = (props) => {
  return <div className="layout">{props.children}</div>;
};

export default TodoList;
