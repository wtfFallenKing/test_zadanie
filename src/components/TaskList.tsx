import Task from "../components/Task";
import { ITask, IFilter } from "../types";

interface TaskListProps {
  tasks: ITask[];
  onToggle: (id: number) => void;
  filter: IFilter;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, filter }) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} onToggle={onToggle} />
      ))}
    </ul>
  );
};

export default TaskList;
