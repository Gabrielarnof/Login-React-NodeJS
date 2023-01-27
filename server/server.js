const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors);

app.post("/login", async (req, res) => {
  try {
    // check if email and password match a user in the database
    // if match, create a token and send it back to the clientc
  } catch (error) {
    res.status(400).send("Invalid email or password");
  }
});

// app.get("/api/data", (req, res) => {
//   // Get data from a database or another source
//   const data = { message: "Hello from the server!" };

//   res.json(data);
// });

app.listen(3001, () => {
  console.log("Server listening on port 3000");
});
