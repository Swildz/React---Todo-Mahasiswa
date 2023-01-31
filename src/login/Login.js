import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <Form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Input Your Email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Input Your Password"
          id="password"
          name="password"
          // required
          // minLength="6"
          // maxLength="20"
          // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z
          //   ]).{6,20}"
          // title="Password must contain at least one number, one uppercase and one lowercase letter"
        />
        <button>
          <Link to={`/dashboard/${email}`} state={{data : 'testing', fullname : 'Ahmad Siddiq'}}>Login</Link>
        </button>
      </Form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};
