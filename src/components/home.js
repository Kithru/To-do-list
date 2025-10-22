import React, { useState } from "react";
import "../assets/custom.css";

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
      {/* Left side - Add Task */}
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

        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Right side - Task List */}
      <div className="task-list">
        <h2>Task List</h2>
        {tasks.length === 0 ? (
          <p className="empty">No tasks added yet.</p>
        ) : (
          <div className="task-container">
            {tasks.map((task, index) => (
              <div className="task-card" key={index}>
                <div className="task-header">
                  <h3>{task.title}</h3>
                </div>
                <div className="task-body">
                  <p>{task.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
