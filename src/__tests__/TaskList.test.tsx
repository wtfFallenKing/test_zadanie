import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { ITask } from "../types";

describe("TaskList Component", () => {
  const tasks: ITask[] = [
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: true },
    { id: 3, text: "Task 3", completed: false },
  ];
  const onToggle = jest.fn();

  it('renders all tasks when filter is "all"', () => {
    render(<TaskList tasks={tasks} onToggle={onToggle} filter="all" />);
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.getByText("Task 3")).toBeInTheDocument();
  });

  it('renders only active tasks when filter is "active"', () => {
    render(<TaskList tasks={tasks} onToggle={onToggle} filter="active" />);
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.queryByText("Task 2")).toBeNull();
    expect(screen.getByText("Task 3")).toBeInTheDocument();
  });

  it('renders only completed tasks when filter is "completed"', () => {
    render(<TaskList tasks={tasks} onToggle={onToggle} filter="completed" />);
    expect(screen.queryByText("Task 1")).toBeNull();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.queryByText("Task 3")).toBeNull();
  });
});
