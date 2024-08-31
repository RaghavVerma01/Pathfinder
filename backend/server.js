// const express = require('express');
// const mongoose = require('mongoose');
// const {connectDatabase} = require('./db/connections')
// require('dotenv').config()
import express from 'express';
import {config} from 'dotenv';
import appRouter from './routes/approuter.js';
import cookieParser from 'cookie-parser';
import { connectDatabase } from './db/connections.js';
const PORT = process.env.PORT || 5000

config();

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use('/api/v1',appRouter);

//connections and listeners

connectDatabase().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT} and Database Handshake complete`);
    })
}).catch((err)=>console.log(err))   



