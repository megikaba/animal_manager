const express = require('express');
const connectDB = require('./config/db');

// Lidhja me MongoDB
connectDB();
const app = express();

// Middleware per te analizuar JSON
app.use(express.json());

// Importimi and perdorimi i routeve te animals
const animalRouter = require('./routes/animals');
app.use('/animals', animalRouter); //linku qe peroret ne postman

// Start the server
app.listen(3000, async () => {
    console.log('Server started on port 3000');
});
