const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');


// load env vars
dotenv.config({path: './config/config.env'});
const app = express();

connectDB();
app.use(express.json());
app.use(cors());    // enable cors -> cross platform data sharing

app.get('/api/stores', (req, res) => {

})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
