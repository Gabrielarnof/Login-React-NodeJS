import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EntryPage, PageHeader } from "./style";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
// import Input from "../components/Input";
import Button from "../components/Button";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // send a post request to the backend with name, email, and password
    // using axios or fetch
  };
  return (
    <EntryPage>
      <PageHeader to="/">My site </PageHeader>
      <EntryCard>
        <form onSubmit={handleSubmit}></form>
        <h2>Sign up</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label htmlFor="signup-name">First Name</label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="signup-name">Last Name</label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="signup-email">Email Address</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <Button type="submit" full>
            Sign up
          </Button>
        </form>
        <span>
          Don't have an account?
          <Link to="/Login">Log in</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
}
export default Signup;
