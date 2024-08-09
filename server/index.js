const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' }));

// Test Route
app.get('/Signup', (req, res) => {
    res.send('Server is working');
});

// Database Connection
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'book',
});

// Signup Route
app.post('/Signup', (req, res) => {
    const sentEmail = req.body.Email;
    const sentUser = req.body.name;
    const sentPassword = req.body.password;

    const SQL = 'INSERT INTO user (email, username, password) VALUES (?, ?, ?)';
    const Values = [sentEmail, sentUser, sentPassword];

    db.query(SQL, Values, (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).send(err);
        } else {
            console.log('User successfully added');
            res.status(200).send({ message: 'User added' });
        }
    });
});

// Start Server
app.listen(2024, () => {
    console.log('Server running on port 2024');
});
