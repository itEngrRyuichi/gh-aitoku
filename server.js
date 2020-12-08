const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();

// cors 
app.use(cors());
app.use(express.json());

// connect to mongo
const uri = process.env.MONGODB_URI || process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


// router
const customersRouter = require('./routes/customers');
const pricesRouter = require('./routes/prices');
const roomsRouter = require('./routes/rooms');
const scheduleRouter = require('./routes/schedule');

app.use('/customers', customersRouter);
app.use('/prices', pricesRouter);
app.use('/rooms', roomsRouter);
app.use('/schedule', scheduleRouter);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// port
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});