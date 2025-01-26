const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const port = 3001;

// Middleware to parse JSON
app.use(bodyParser.json());

// Connect to MySQL database
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Your MySQL username
  password: "Dhanya@123", // Your MySQL password
  database: "reactspring",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Connected to the MySQL database.");
  }
});

// Endpoint to handle form submission
app.post("/submit", (req, res) => {
  const { adharNumber, phonenumber, panNumber } = req.body;

  if ((!adharNumber || !phonenumber, panNumber)) {
    return res.status(400).json({ message: "Name and email are required." });
  }

  const query = `INSERT INTO user (name, email) VALUES (?, ?)`;

  db.query(query, [adharNumber, phonenumber, panNumber], (err, results) => {
    if (err) {
      console.error("Error inserting data:", err.message);
      return res.status(500).json({ message: "Failed to save user data." });
    }

    res.status(200).json({ message: "User data saved.", id: results.insertId });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
