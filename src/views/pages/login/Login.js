import React from "react";
import "./style.css"
const Login = () => {
  return (
    <div className="lg-container">
      <div class="login">
        <h2>Login</h2>
        <div class="group">
          <input type="text" placeholder="Username" />
          <i class="fa fa-user"></i>
        </div>
        <div class="group">
          <input type="password" placeholder="Password" />
          <i class="fa fa-lock"></i>
        </div>
        <button>
          {" "}
          <i class="fa fa-send"></i>Login
      </button>
        <p class="fs">
          Forgot <a href="#">Password</a> ?{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
