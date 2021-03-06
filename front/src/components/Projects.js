import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/ProjectState";

export const Projects = () => {
  const { addProject } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  // eslint-disable-next-line
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    addProject();
    // eslint-disable-next-line
  }, []);

  if (localStorage.getItem("authToken") === null) {
    return (
      <p>
        Please log in first, <Link to="/login">Login</Link>
      </p>
    );
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      name: name,
      amount: +amount,
      description: description,
      user: "60f91c788b820c315c2d2fcf",
    };

    if (name.length >= 2 && name.length < 30 && description.length < 600) {
      addProject(newProject);
      setName("");
      setAmount(0);
      setDescription("");
      setUser("60f91c788b820c315c2d2fcf");
    } else {
      setError("Something is wrong with given values");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
      <section className="pages">
        <div className="text">
          <h4>Add a new project</h4>

          {error && <span className="error-message"> {error} </span>}
          {localStorage.getItem("authToken") !== null && (
            <>
              <form onSubmit={onSubmit}>
                <div className="form-control">
                  <label htmlFor="text">Project name</label>
                  <input
                    id="project-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter text max. 25..."
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="amount">
                    How much time do you want to spend?
                  </label>
                  <input
                    id="project-amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter hours..."
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="description">Descripe your project</label>
                  <input
                    id="project-description"
                    type="text-field"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description max. 600 characters..."
                  />
                </div>
                <button id="project-btn" className="btn">
                  Add new project
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
};
