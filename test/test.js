import request from 'supertest';
import { expect } from 'chai';

const BASE_URL = 'http://localhost:3000';

describe('Task Manager API', () => {
  it('should create a new task', async () => {
    const res = await request(BASE_URL)
      .post('/tasks')
      .send({ title: 'Test Task' });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('id');
    expect(res.body).to.have.property('title', 'Test Task');
    expect(res.body).to.have.property('completed', false);
  });

  it('should get all tasks', async () => {
    const res = await request(BASE_URL).get('/tasks');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should get a task by ID', async () => {
    const task = { title: 'Another Task' };
    const createdTask = await request(BASE_URL).post('/tasks').send(task);

    const res = await request(BASE_URL).get(`/tasks/${createdTask.body.id}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', createdTask.body.id);
    expect(res.body).to.have.property('title', task.title);
    expect(res.body).to.have.property('completed', false);
  });

  it('should update a task', async () => {
    const task = { title: 'Task to Update' };
    const createdTask = await request(BASE_URL).post('/tasks').send(task);

    const res = await request(BASE_URL)
      .put(`/tasks/${createdTask.body.id}`)
      .send({ title: 'Updated Task', completed: true });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', createdTask.body.id);
    expect(res.body).to.have.property('title', 'Updated Task');
    expect(res.body).to.have.property('completed', true);
  });

  it('should delete a task', async () => {
    const task = { title: 'Task to Delete' };
    const createdTask = await request(BASE_URL).post('/tasks').send(task);

    const res = await request(BASE_URL).delete(`/tasks/${createdTask.body.id}`);
    expect(res.status).to.equal(204);
  });
});
