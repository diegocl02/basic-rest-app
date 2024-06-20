import express from 'express';
const app = express();
app.use(express.json());

let tasks = [];
let idCounter = 1;

// Endpoint to create a new task
app.post('/tasks', (req, res) => {
});

// Endpoint to get all tasks
app.get('/tasks', (req, res) => {
});

// Endpoint to get a specific task by ID
app.get('/tasks/:id', (req, res) => {
});

// Endpoint to update a task
app.put('/tasks/:id', (req, res) => {
});

// Endpoint to delete a task
app.delete('/tasks/:id', (req, res) => {
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
