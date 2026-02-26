//API framework
const express = require('express');
//cross origin resource sharing
const cors=require('cors');
//Environment variables
require('dotenv').config();
//Database connection
const db=require('./config/db.js');
//routes
const routes=require('./routes/index.js');

//utilation of express
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//Use routes
app.use('/api',routes)

app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
});