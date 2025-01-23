import "@testing-library/jest-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  it("should add a new task to the list", async () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText("Add task...");
    const addButton = screen.getByRole("button", { name: "Add" });

    fireEvent.change(inputElement, { target: { value: "New Test Task" } });
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText("New Test Task")).toBeInTheDocument();
    });
  });

  it("should toggle a task as completed when clicked", async () => {
    render(<App />);

    const checkbox = await screen.findAllByRole("checkbox");

    fireEvent.click(checkbox[0]);

    await waitFor(() => {
      expect(checkbox[0]).toBeChecked();
    });

    fireEvent.click(checkbox[0]);

    await waitFor(() => {
      expect(checkbox[0]).not.toBeChecked();
    });
  });

  it("should filter the tasks based on the filter button selected", async () => {
    render(<App />);

    const allButton = screen.getByRole("button", { name: "All" });
    const activeButton = screen.getByRole("button", { name: "Active" });
    const completedButton = screen.getByRole("button", { name: "Completed" });

    fireEvent.click(activeButton);
    await waitFor(() => {
      expect(screen.queryByText("Прекрасный код")).toBeNull();
    });

    fireEvent.click(completedButton);
    await waitFor(() => {
      expect(screen.queryByText("Тестовое задание")).toBeNull();
    });

    fireEvent.click(allButton);
    await waitFor(() => {
      expect(screen.getByText("Прекрасный код")).toBeInTheDocument();
      expect(screen.getByText("Тестовое задание")).toBeInTheDocument();
    });
  });

  it("should clear completed tasks from the list", async () => {
    render(<App />);

    const clearCompletedButton = screen.getByRole("button", {
      name: "Clear completed",
    });
    const checkbox = await screen.findAllByRole("checkbox");

    fireEvent.click(checkbox[1]);

    await waitFor(() => {
      expect(checkbox[1]).toBeChecked();
    });

    fireEvent.click(clearCompletedButton);

    await waitFor(() => {
      expect(screen.queryByText("Прекрасный код")).toBeNull();
    });
  });
});
