require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const cookieRoutes = require('./routes/cookieRoutes');
const authRoutes = require('./routes/authRoutes');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error('Missing MONGO_URI in environment');
    process.exit(1);
}

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');

        app.use('/api/auth', authRoutes);
        app.use('/api/cookies', cookieRoutes);
        const pageRoutes = require('./routes/pageRoutes');
        const profileRoutes = require('./routes/profileRoutes');
        app.use('/api', pageRoutes);

        app.use('/api', profileRoutes);

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });