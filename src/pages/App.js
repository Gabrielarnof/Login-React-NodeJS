import React, { useState, useEffect } from "react";
import Routees from "./Routes";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return <div className="App">{<Routees />}</div>;
}

export default App;
