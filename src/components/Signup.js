import axios from "axios";
import React, { useState, useContext } from "react";
import alertContext from "../context/alert/alertContext";

function Signup() {
  if (localStorage.getItem("token")) {
    window.location.href = "/";
  }
  const baseUrl = "http://localhost:5000";
  const alertCntx = useContext(alertContext);
  const { setAlert } = alertCntx;
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post(`${baseUrl}/api/auth/register`, {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
    });
    console.log(data.data);
    if (data.data.status) {
      setCredentials({ name: "", email: "", password: "" });
      setAlert({ alertType: "success", msg: "User signed up successfully." });
    } else {
      setAlert({ alertType: "danger", msg: data.data.msg });
    }
    // alert(data.data.msg);
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
              <h3>Signup</h3>
              <div className="form-group my-2">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={credentials.name}
                  onChange={onChange}
                  placeholder="Enter your name"
                  id=""
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={onChange}
                  className="form-control"
                  placeholder="Enter your email"
                  id=""
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={onChange}
                  className="form-control"
                  placeholder="Enter your password"
                  id=""
                />
              </div>
              <div className="form-group my-2">
                <button className="btn btn-primary">Signup</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-2 col-sm-2"></div>
      </div>
    </div>
  );
}

export default Signup;
