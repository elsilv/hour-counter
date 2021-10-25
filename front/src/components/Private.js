import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const Private = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("Please login, access denied");
      }
    };

    fetchPrivateData();
  }, [history]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };

  return error ? (
    <div className="text-area">{error}</div>
  ) : (
    <div className="content">
      <p> {privateData} </p>
      <button onClick={logoutHandler}>Log out</button>
      <div className="text-area">
        <p>
          Something gone wrong...
        </p>
      </div>
    </div>
  );
};

export default Private;
