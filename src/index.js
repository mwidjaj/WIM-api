import express from 'express';
import path from 'path';
<<<<<<< HEAD
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Promise from 'bluebird';

import auth from './routes/auth';

dotenv.config();
const app = express();
app.use(bodyParser.json());
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL);

app.use('/api/auth', auth);
=======

const app = express();

app.post('/api/auth', (req, res) => {
    res.status(400).json({ errors: { global: "Invalid credentials" } });
});
>>>>>>> 9d7cecae42c94cb28ff2f48faf628126abc51d03

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => console.log('Running on localhost:8080'));
