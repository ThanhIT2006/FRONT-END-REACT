import axios from 'axios';
import FilterControls from './component/FilterControls';
import TaskForm from './component/TaskForm';
import TaskItem from './component/TaskItem';
import { useEffect, useState } from 'react';
import LoadingOverlay from './component/LoadingOverlay';
import ConfirmModal from './component/ConfirmModal';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    search: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const [showConfirm, setShowConfirm] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const res = await axios.get<Task[]>("http://localhost:8080/tasks");
        setTasks(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleAdd = (title: string, priority: 'low' | 'medium' | 'high') => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      priority,
    };
    setTasks([...tasks, newTask]);
    axios.post("http://localhost:8080/tasks", newTask);
  };

  const handleToggle = (id: number) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    const updateTask = updatedTasks.find((t) => t.id === id);
    if (updateTask) {
      axios.put(`http://localhost:8080/tasks/${id}`, updateTask);
    }
  };

  const handleDelete = (task: Task) => {
    setTaskToDelete(task);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    if (taskToDelete) {
      setTasks(tasks.filter((t) => t.id !== taskToDelete.id));
      axios.delete(`http://localhost:8080/tasks/${taskToDelete.id}`);
    }
    setShowConfirm(false);
    setTaskToDelete(null);
  };

  const filteredTasks = tasks.filter((t) => {
    const matchStatus =
      filters.status === 'all' ||
      (filters.status === 'completed' && t.completed) ||
      (filters.status === 'active' && !t.completed);

    const matchPriority =
      filters.priority === 'all' || t.priority === filters.priority;

    const matchSearch = t.title.toLowerCase().includes(filters.search.toLowerCase());

    return matchStatus && matchPriority && matchSearch;
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen relative">
      <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>

      <TaskForm tasks={tasks} onAdd={handleAdd} />

      <FilterControls
        status={filters.status}
        priority={filters.priority}
        search={filters.search}
        onStatusChange={(status) => setFilters({ ...filters, status })}
        onPriorityChange={(priority) => setFilters({ ...filters, priority })}
        onSearchChange={(search) => setFilters({ ...filters, search })}
      />

      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          {...task}
          onToggle={handleToggle}
          onDelete={() => handleDelete(task)}
        />
      ))}

      {filteredTasks.length === 0 && !loading && (
        <p className="text-center text-gray-500 mt-4">
          Không có công việc nào
        </p>
      )}

      {loading && <LoadingOverlay />}

      <ConfirmModal
        isOpen={showConfirm}
        taskTitle={taskToDelete?.title || ""}
        onConfirm={confirmDelete}
        onCancel={() => setShowConfirm(false)}
      />
    </div>
  );
};

export default App;
