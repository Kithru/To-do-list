import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add new task
  const handleAddTask = () => {
    if (title.trim() === "" || description.trim() === "") return;
    const newTask = { title, description };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="container">
      {/* Left side — Add Task Form */}
      <div className="add-task">
        <h2>Add a Task</h2>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button onClick={handleAddTask}>Add</button>
      </div>

      {/* Right side — Task List */}
      <div className="task-list">
        <h2>Task List</h2>
        {tasks.length === 0 ? (
          <p className="empty">No tasks added yet.</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
