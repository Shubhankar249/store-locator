const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const Store = require('./models/Store');

// load env vars
dotenv.config({path: './config/config.env'});
const app = express();

connectDB();
app.use(express.json());
app.use(cors());    // enable cors -> cross platform data sharing

app.get('/api/stores', async (req, res) => {
    try {
        const stores = await Store.find();
        return res.status(200).json({
            success: true,
            count: stores.length,
            data: stores
        })
    }catch (e) {
        console.error(e);
        res.status(500).json({error:'Server Error'})
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
