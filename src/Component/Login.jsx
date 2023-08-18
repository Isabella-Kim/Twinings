import React from "react";

const Login = () => {
  return (
    <div className="loginPage">
      <div className="loginArea">
        <label>Email Adress</label>
        <input type="email" placeholder="Enter Your Email*" />
        <label>Password</label>
        <input type="password" placeholder="Enter Your PW*" />
      </div>
      <button>Login</button>
    </div>
  );
};

export default Login;
