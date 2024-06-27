import axios from "axios";
import React, { useState, useContext } from "react";
import alertContext from "../context/alert/alertContext";

function Login() {
  if (localStorage.getItem("token")) {
    window.location.href = "/";
  }
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const baseUrl = "http://localhost:5000";
  const alertCntx = useContext(alertContext);
  const { setAlert } = alertCntx;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post(`${baseUrl}/api/auth/login`, {
      email: credentials.email,
      password: credentials.password,
    });
    console.log(data);
    if (data.data.status) {
      localStorage.setItem("token", data.data.token);
      window.location.href = "/";
      setAlert({ alertType: "success", msg: "User logged in successfully." });
    } else {
      // alert("Enter valid credentials");
      setAlert({ alertType: "danger", msg: "Invalid credentials" });
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-2 col-sm-2"></div>
        <div className="col-md-8 col-sm-2">
          <div className="card">
            <form className="m-4" onSubmit={handleSubmit}>
              <h3>Login</h3>
              <div className="form-group my-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  className="form-control"
                  onChange={onChange}
                  placeholder="Enter your email"
                  id=""
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={onChange}
                  value={credentials.password}
                  className="form-control"
                  placeholder="Enter your password"
                  id=""
                />
              </div>
              <div className="form-group my-2">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-2 col-sm-2"></div>
      </div>
    </div>
  );
}

export default Login;
