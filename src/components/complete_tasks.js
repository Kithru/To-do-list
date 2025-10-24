import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/custom.css";

function CompletedTasks() {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/com_tasks")
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setTasks(data.data);
        } else {
          setTasks(data);
        }
      })
      .catch((err) => console.error("Failed to fetch tasks:", err));
  }, []);

  const completedTasks = tasks.filter((task) => task.status === 1);

  // Pagination logic
  const totalPages = Math.ceil(completedTasks.length / tasksPerPage);
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = completedTasks.slice(indexOfFirstTask, indexOfLastTask);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Format datetime nicely
  const formatDateTime = (datetime) => {
    if (!datetime) return "";
    const date = new Date(datetime);
    return date.toLocaleString(); // e.g., "10/24/2025, 2:30:45 PM"
  };

  return (
    <div className="completed-tasks-page">
      <div className="completed-tasks-container">
        <h2>All Completed Tasks</h2>

        {completedTasks.length === 0 ? (
          <p className="empty">No completed tasks yet.</p>
        ) : (
          <>
            <div className="task-container">
              {currentTasks.map((task) => (
                <div className="task-card completed" key={task.id}>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  {task.updated_at && (
                    <p className="completed-time">
                      Completed at: {formatDateTime(task.updated_at)}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <ul className="pagination">
                <li className={currentPage === 1 ? "disabled" : ""}>
                  <a
                    href="#!"
                    onClick={() =>
                      currentPage > 1 && handlePageChange(currentPage - 1)
                    }
                  >
                    Prev
                  </a>
                </li>

                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index + 1}
                    className={currentPage === index + 1 ? "active" : ""}
                  >
                    <a href="#!" onClick={() => handlePageChange(index + 1)}>
                      {index + 1}
                    </a>
                  </li>
                ))}

                <li className={currentPage === totalPages ? "disabled" : ""}>
                  <a
                    href="#!"
                    onClick={() =>
                      currentPage < totalPages &&
                      handlePageChange(currentPage + 1)
                    }
                  >
                    Next
                  </a>
                </li>
              </ul>
            )}
          </>
        )}

        <button className="back-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default CompletedTasks;
