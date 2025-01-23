import React, { useState } from "react";
import TaskList from "./components/TaskList";
import { ITask, IFilter } from "./types";

const initialTasks: ITask[] = [
  { id: 1, text: "Тестовое задание", completed: false },
  { id: 2, text: "Прекрасный код", completed: true },
  { id: 3, text: "Покрытие тестами", completed: false },
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>(initialTasks);

  const [newTaskText, setNewTaskText] = useState("");
  const [filter, setFilter] = useState<IFilter>("all");

  const addTask = () => {
    if (newTaskText.trim() !== "") {
      const newTask: ITask = {
        id: Date.now(),
        text: newTaskText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskText("");
    }
  };

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const itemsLeft = tasks.filter((task) => !task.completed).length;

  return (
    <div
      style={{
        fontFamily: "Roboto, sans-serif",
        width: "600px",
        minHeight: "400px",
        padding: "30px",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        margin: "20px auto",
      }}
    >
      <div style={{ display: "flex", marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Add task..."
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          style={{
            flex: 1,
            padding: "12px",
            marginRight: "10px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            outline: "none",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
          }}
        />
        <button
          onClick={addTask}
          style={{
            backgroundColor: "#4285f4",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "10px 15px",
            cursor: "pointer",
            outline: "none",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
          }}
        >
          Add
        </button>
      </div>
      <TaskList tasks={tasks} onToggle={toggleTask} filter={filter} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#777", fontSize: "0.9em" }}>
          {itemsLeft} items left
        </span>
        <div>
          <button
            onClick={() => setFilter("all")}
            style={{
              backgroundColor: filter === "all" ? "#e8f0fe" : "transparent",
              color: filter === "all" ? "#4285f4" : "#777",
              border: "none",
              borderRadius: "4px",
              padding: "5px 10px",
              cursor: "pointer",
              marginRight: "5px",
              outline: "none",
            }}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            style={{
              backgroundColor: filter === "active" ? "#e8f0fe" : "transparent",
              color: filter === "active" ? "#4285f4" : "#777",
              border: "none",
              borderRadius: "4px",
              padding: "5px 10px",
              cursor: "pointer",
              marginRight: "5px",
              outline: "none",
            }}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            style={{
              backgroundColor:
                filter === "completed" ? "#e8f0fe" : "transparent",
              color: filter === "completed" ? "#4285f4" : "#777",
              border: "none",
              borderRadius: "4px",
              padding: "5px 10px",
              cursor: "pointer",
              outline: "none",
            }}
          >
            Completed
          </button>
        </div>
        <button
          onClick={clearCompleted}
          style={{
            color: "#777",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            outline: "none",
          }}
        >
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default App;
