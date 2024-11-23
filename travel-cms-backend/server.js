const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/packages', require('./routes/packages'));
app.use('/bookings', require('./routes/bookings'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
