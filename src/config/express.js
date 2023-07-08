import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { filesRouter } from '../routes/files.route.js';
import { usersRouter } from '../routes/users.route.js';
import { databaseService } from '../services/database.service.js';

dotenv.config();
const app = express();

// SET UP APP VARIABLES
app.set('port', process.env.PORT || 3000);

// MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());
app.use('/api/files', filesRouter);
app.use('/api/users', usersRouter);
app.use((res) => {
  res.status(404).json({ success: false, message: 'Not found' });
});

databaseService.connect();

export { app };
