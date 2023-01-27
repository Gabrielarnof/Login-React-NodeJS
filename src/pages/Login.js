import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EntryPage, PageHeader } from "./style";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
// import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [body, setBody] = useState({ email: "", password: "" });

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const onSubmit = () => {
    console.log(body);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // send a post request to the backend with email and password
  //   // using axios or fetch
  // };
  return (
    <EntryPage>
      <PageHeader to="/">My Site</PageHeader>

      <EntryCard>
        <h2>Log in</h2>

        <InputGroup>
          <label htmlFor="login-email">Email Address</label>
          <input
            type="email"
            value={body.email}
            onChange={inputChange}
            name="email"
            // onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="login-password">Password</label>

          <input
            type="password"
            value={body.password}
            onChange={inputChange}
            name="password"
            // onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        <Button type="submit" onCLick={onSubmit}>
          Log in
        </Button>

        <span>
          Don't have an account?
          <Link to="/signup">Sign up</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
}
export default Login;
