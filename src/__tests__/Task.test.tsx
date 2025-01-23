import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import Task from "../components/Task";
import { ITask } from "../types";

describe("Task Component", () => {
  it("renders the task text and checkbox", () => {
    const task: ITask = { id: 1, text: "Test Task", completed: false };
    const onToggle = jest.fn();
    const { getByText, getByRole } = render(
      <Task task={task} onToggle={onToggle} />
    );

    expect(getByText("Test Task")).toBeInTheDocument();
    expect(getByRole("checkbox")).toBeInTheDocument();
  });

  it("calls onToggle when checkbox is clicked", () => {
    const task: ITask = { id: 1, text: "Test Task", completed: false };
    const onToggle = jest.fn();
    const { getByRole } = render(<Task task={task} onToggle={onToggle} />);

    fireEvent.click(getByRole("checkbox"));
    expect(onToggle).toHaveBeenCalledWith(1);
  });

  it("renders the checkbox with the correct checked state", () => {
    const taskCompleted: ITask = {
      id: 1,
      text: "Test Task",
      completed: true,
    };
    const taskNotCompleted: ITask = {
      id: 1,
      text: "Test Task",
      completed: false,
    };
    const onToggle = jest.fn();

    const { getByRole: getByRoleCompleted } = render(
      <Task task={taskCompleted} onToggle={onToggle} />
    );
    expect(getByRoleCompleted("checkbox")).toBeChecked();

    const { getByRole: getByRoleNotCompleted } = render(
      <Task task={taskNotCompleted} onToggle={onToggle} />
    );
    expect(getByRoleNotCompleted("checkbox")).not.toBeChecked();
  });
});
