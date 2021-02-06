import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

import './database/connection';

const app = express();
app.use(express.json());


import User from './models/User';
import Barbershop from './models/Barbershop';

import { getRepository } from 'typeorm';


app.get('/users', async (req, res) => {
  const userRepository = getRepository(User);
  const users = await userRepository.find({ relations: ['orders'] });
  return res.json(users); 
});
app.get('/barbershops', async (req, res) => {
  const userRepository = getRepository(Barbershop);
  const barbershops = await userRepository.find({ relations: ['adresses', 'menus', 'orders' ,'schedules', ] });
  return res.json(barbershops); 
});

app.listen(process.env.APPLICATION_PORT);