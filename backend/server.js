import express from 'express';
import dotenv from 'dotenv';
import events from './data/events.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.get('/api/events', (req, res) => {
  res.json(events);
});

app.get('/api/events/:id', (req, res) => {
  const day = events.find((d) => d._id === req.params.id);
  res.json(day);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
