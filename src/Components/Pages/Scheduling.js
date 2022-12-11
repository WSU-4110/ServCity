import React from "react";
import { Titleholder, Content } from "./SchedulingStyles";
import TodoList from "../ToDoList";
import "./Scheduling.css";

function Scheduling() {
  return (
    <Content>
      <Titleholder>Scheduling</Titleholder>
      <div className="todo-app">
        <TodoList />
      </div>
    </Content>
  );
}

export default Scheduling;
