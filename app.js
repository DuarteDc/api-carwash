require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
});