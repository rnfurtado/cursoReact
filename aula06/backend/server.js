const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

//Configs
var corOptions = {
    origin : 'http://localhost:3000',
    optionsSuccessStatus : 200
}

app.use(cors());
app.use(express.json());

//Database connection
mongoose.connect(process.env.MONGODB, {useNewUrlParser : true, useUnifiedTopology : true});

//Models
requireDir('./src/models');

//Websocket = middleware
app.use((req, res, next) => {
    req.io = io;
    next();
})

//Routes
app.use('/api', require('./src/routes'));

server.listen(process.env.PORT || 3002);
console.log('app is listening on port 3002');