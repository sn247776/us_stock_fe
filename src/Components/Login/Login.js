import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login({ handleLogin, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="card">
        {error === "" ? <></> : <p>{error}</p>}
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <form
              className="form px-4 pt-5"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin({ username, password });
              }}
            >
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name=""
                className="form-control"
                placeholder="Username"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name=""
                className="form-control"
                placeholder="Password"
              />
              <input
                className="btn btn-outline-success"
                type="submit"
                value="Login"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
