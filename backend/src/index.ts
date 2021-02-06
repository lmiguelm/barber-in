import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

import './database/connection';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

app.listen(process.env.APPLICATION_PORT);