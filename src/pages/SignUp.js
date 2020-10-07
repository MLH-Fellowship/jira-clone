import React, { useState } from "react";

function SignUp({ signUp }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    if (password === confirmPassword) {
      signUp(user);
    } else {
      window.alert("passwords must match");
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
      <form onSubmit={(e) => onSubmit(e)} className="form">
        <input
          className="input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          type="text"
          name="firstName"
          required
        />
        <input
          className="input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
          type="text"
          name="lastName"
          required
        />
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
          minLength="6"
          required
        />
        <input
          className="input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm password"
          type="password"
          name="password"
          minLength="6"
          required
        />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
export default SignUp;
