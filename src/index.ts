import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

let tasks: Task[] = [];
let idCounter: number = 1;

// Endpoint to create a new task
app.post('/tasks', (req: Request, res: Response) => {
  // Implementation here
});

// Endpoint to get all tasks
app.get('/tasks', (req: Request, res: Response) => {
  // Implementation here
});

// Endpoint to get a specific task by ID
app.get('/tasks/:id', (req: Request, res: Response) => {
  // Implementation here
});

// Endpoint to update a task
app.put('/tasks/:id', (req: Request, res: Response) => {
  // Implementation here
});

// Endpoint to delete a task
app.delete('/tasks/:id', (req: Request, res: Response) => {
  // Implementation here
});

// Start the server
const PORT: number = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
