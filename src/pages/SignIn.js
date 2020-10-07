import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignInPage = ({ signIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    signIn(user);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Sign In</h1>
      <form onSubmit={(e) => onSubmit(e)} className="form">
        <input
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          name="email"
          required
        />
        <input
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
      <p style={{ textAlign: "center" }}>
        New around here? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  );
};

export default SignInPage;
