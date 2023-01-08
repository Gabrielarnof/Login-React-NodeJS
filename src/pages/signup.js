import React from "react";
import { Link } from "react-router-dom";
import { EntryPage, PageHeader } from "./style";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";

function Signup() {
  return (
    <EntryPage>
      <PageHeader to="/">AWESOME LOGO</PageHeader>
      <EntryCard>
        <h2>Sign up</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label htmlFor="signup-name">Full Name</label>
            <Input type="text" placeholder="John Doe" id="signup-name" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="signup-email">Email Address</label>
            <Input type="text" placeholder="name@email.com" id="signup.email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="signup-password">Password</label>
            <Input
              type="password"
              placeholder="Password"
              id="signup-password"
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
