import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const handleAdd = () => {
    if (input.trim() === "") {
      setError("Vui lòng nhập tên công việc!");
      return;
    }
    setError("");
    if (editId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: input } : todo
        )
      );
      setEditId(null);
    } else {
      const newTodo: Todo = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
    setInput("");
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEdit = (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      setInput(todo.text);
      setEditId(todo.id);
    }
  };

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow rounded" style={{ width: "500px" }}>
        <h3 className="text-center mb-3 fw-bold">Danh sách công việc</h3>
        <div className="d-flex mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập công việc..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-primary ms-2" onClick={handleAdd}>
            {editId ? "Cập nhật" : "Thêm"}
          </button>
        </div>
        {error && <p className="text-danger">{error}</p>}
        <ul className="list-group mb-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
              </div>
              <div>
                <button
                  className="btn btn-sm btn-outline-primary me-2"
                  onClick={() => handleEdit(todo.id)}
                >
                  ✏️
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(todo.id)}
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-success text-center">
          {completedCount} / {todos.length} công việc đã hoàn thành
        </p>
      </div>
    </div>
  );
}

export default TodoApp;
