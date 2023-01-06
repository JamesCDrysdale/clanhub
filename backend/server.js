const express = require('express');
const homework = require('./data/homework');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("API is running...");
});

// HOMEWORK ROUTES

// Get all homework submissions
app.get('/api/homework', (req, res) => {
    res.send(homework);
});

// Get single homework submission
app.get('/api/homework/:id', (req, res) => {
    const homeworkSubmission = homework.find((submission) => submission._id === req.params.id);
    res.send(homeworkSubmission);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on post ${PORT}`));