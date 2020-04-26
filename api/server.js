require('dotenv').config();
const express = require('express');



//const usersRouter = require('./routes/users');

const server = express();


server.use(express.json());

//server.use('/v1/api/users', usersRouter);


server.get("/", (req, res) => {
    res.status(200).json({api: "*** server running ***"});
})

module.exports = server;
