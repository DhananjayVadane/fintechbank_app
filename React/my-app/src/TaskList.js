import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggleCompletion, onDelete }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks to display.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleCompletion={onToggleCompletion}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
