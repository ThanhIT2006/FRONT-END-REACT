import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}

interface TaskFormProps {
  tasks: Task[];
  onAdd: (title: string, priority: "low" | "medium" | "high") => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ tasks, onAdd }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Tên công việc không được để trống");
      return;
    }
    if (
      tasks.some(
        (t) => t.title.toLowerCase() === title.trim().toLowerCase()
      )
    ) {
      setError("Tên công việc đã tồn tại");
      return;
    }
    setError("");

    onAdd(title.trim(), priority);

    setTitle("");
    setPriority("medium");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-md"
    >
      <TextField
        label="Tên công việc"
        variant="outlined"
        size="small"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1"
        error={!!error}
        helperText={error}
      />
      <FormControl size="small" className="w-36">
        <InputLabel>Ưu tiên</InputLabel>
        <Select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as "low" | "medium" | "high")
          }
          label="Ưu tiên"
        >
          <MenuItem value="low">Thấp</MenuItem>
          <MenuItem value="medium">Trung bình</MenuItem>
          <MenuItem value="high">Cao</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Thêm
      </Button>
    </form>
  );
};

export default TaskForm;
