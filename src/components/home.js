import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../assets/custom.css";

function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  // Fetch all tasks
  const fetchTasks = () => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Failed to fetch tasks:", err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add new task
  const handleAddTask = () => {
    if (title.trim() === "" || description.trim() === "") return;

    fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => res.json())
      .then(() => {
        setTitle("");
        setDescription("");
        fetchTasks();
      })
      .catch((err) => console.error("Failed to add task:", err));
  };

  // Mark task as completed
  const handleComplete = (id) => {
    fetch(`/api/tasks/${id}/complete`, { method: "PATCH" })
      .then(() => fetchTasks())
      .catch((err) => console.error("Failed to complete task:", err));
  };

  return (
    <div className="container">
      {/* Add Task Section */}
      <div className="add-task">
        <h2>Add a Task</h2>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Recent 5 Tasks Section */}
      <div className="task-list">
        <h2>Recent Tasks (5)</h2>
        {tasks.length === 0 ? (
          <p className="empty">No tasks added yet.</p>
        ) : (
          <div className="task-container">
            {tasks.map((task) => (
              <div
                className={`task-card ${task.status ? "completed" : ""}`}
                key={task.id}
              >
                <div className="task-header">
                  <h3>{task.title}</h3>
                  {!task.status && (
                    <button onClick={() => handleComplete(task.id)}>
                      Mark as Completed
                    </button>
                  )}
                </div>
                <div className="task-body">
                  <p>{task.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Completed Tasks Button */}
      {tasks.some((task) => task.status) && (
        <div className="completed-tasks">
          <h2>Completed Tasks</h2>
          <button
            className="view-completed-btn"
            onClick={() => navigate("/completed")} // Use useNavigate here
          >
            View All Completed Tasks
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
