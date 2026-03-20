const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
  host: 'myserverdatabase.c6r88o068zoh.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Nits#1280',
  database: 'myserver',
  ssl: {
    rejectUnauthorized: false
  }
});

// API to test
app.get('/', (req, res) => {
  res.send('CI/CD Auto Deploy Working 🚀');
});

// API to fetch users
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.send(err);
      return;
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
