import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../assets/custom.css"; // Ensure you import your CSS

function CompletedTasks() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all tasks from Laravel API
    fetch("http://127.0.0.1:8000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Failed to fetch tasks:", err));
  }, []);

  const completedTasks = tasks.filter((task) => task.status);

  return (
    <div className="completed-tasks-page">
      <div className="completed-tasks-container">
        <h2>All Completed Tasks</h2>

        {completedTasks.length === 0 ? (
          <p className="empty">No completed tasks yet.</p>
        ) : (
          <div className="task-container">
            {completedTasks.map((task) => (
              <div className="task-card completed" key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Back Button */}
        <button className="back-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default CompletedTasks;