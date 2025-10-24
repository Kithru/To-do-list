import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import Swal from "sweetalert2";
import "../assets/custom.css";

function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate(); 

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
    if (title.trim() === "" && description.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill in both the title and description before adding a task!",
        confirmButtonColor: "#007bff",
      });
      return;
    } else if (title.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill the title before adding a task!",
        confirmButtonColor: "#007bff",
      });
      return;
    } else if (description.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill description before adding a task!",
        confirmButtonColor: "#007bff",
      });
      return;
    }

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
        Swal.fire({
          icon: "success",
          title: "Task Added!",
          text: "Your task has been added successfully.",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((err) => console.error("Failed to add task:", err));
  };

  // Mark task as completed
  const handleComplete = (id) => {
    fetch(`/api/tasks/${id}/complete`, { method: "PATCH" })
      .then(() => {
        fetchTasks();
        Swal.fire({
          icon: "success",
          title: "Task Completed!",
          text: "This task has been marked as completed.",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((err) => console.error("Failed to complete task:", err));
  };

  return (
    <div className="container">
      {/* Left Side - Add Task Section */}
      <div className="add-task">
        <h2>Add a Task</h2>

        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
          ></textarea>
        </div>

        <button onClick={handleAddTask}>Add Task</button>

        {/* View Completed Tasks Button */}
        <button
          className="view-completed-btn"
          onClick={() => navigate("/completed")}
          style={{ marginTop: "15px" }}
        >
          View Completed Tasks
        </button>
      </div>

      {/* Right Side - Recent Tasks Section */}
      <div className="task-list">
        <h2>Recent Tasks (Incomplete)</h2>
        {tasks.filter((task) => task.status === 0).length === 0 ? (
          <p className="empty">No incomplete tasks.</p>
        ) : (
          <div className="task-container">
            {tasks
              .filter((task) => task.status === 0)
              .map((task) => (
                <div className="task-card" key={task.id}>
                  <div className="task-header">
                    <h3>{task.title}</h3>
                    <button onClick={() => handleComplete(task.id)}>
                      Mark as Completed
                    </button>
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

export default Home;
