import React, { useState } from "react";
import { Form } from "react-bootstrap";
export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="auth-form-container">
        <h2>Register</h2>
      <Form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Input Your Name"
          id="name"
          name="name"
          />
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Input Your Email"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Input Your Password"
          id="password"
          name="password"
          required
          minLength="6"
          maxLength="20"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z
            ]).{6,20}"
          title="Password must contain at least one number, one uppercase and one lowercase letter"
        />
        <button type="submit">Login</button>
      </Form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Don't have an account? Register here.</button>
    </div>
  );
};
