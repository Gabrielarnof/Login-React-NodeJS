// import React, { useState, useEffect } from "react";
import Routees from "./Routes";

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:3000/message")
  //     .then((res) => res.json())
  //     // .then((data) => setMessage(data.message));
  //     .then((data) => console.log(data));
  // }, []);

  return <div className="App">{<Routees />}</div>;
}

export default App;
