import React from "react";

function Taskitem({ task, onToggleCompletion, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => onToggleCompletion(task.id)}>
        {task.completed ? "Mark Incomplete" : "Mark Complete"}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default Taskitem;
