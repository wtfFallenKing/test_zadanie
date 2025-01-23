import React from "react";
import { ITask } from "../types";

interface TaskProps {
  task: ITask;
  onToggle: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, onToggle }) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 0",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          style={{
            marginRight: "10px",
            cursor: "pointer",
            width: "18px",
            height: "18px",
            appearance: "none",
            border: "2px solid #ddd",
            borderRadius: "50%",
            backgroundColor: task.completed ? "#4285f4" : "white",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "all 0.2s ease",
            position: "relative",
          }}
        />
        {task.completed && (
          <span
            style={{
              position: "absolute",
              color: "white",
              fontSize: "12px",
              transform: "translate(-50%, -50%)",
              top: "50%",
              left: "50%",
            }}
          >
            ✓
          </span>
        )}
        <span
          style={{
            marginLeft: "10px",
            textDecoration: task.completed ? "line-through" : "none",
            color: "#333",
            flex: "1",
          }}
        >
          {task.text}
        </span>
      </div>
    </li>
  );
};

export default Task;
