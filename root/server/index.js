"use strict";
let port = 9000;

let express = require('express'),
    path = require("path"),
    logger = require("morgan");

let app = express();
app.use(logger("dev"));

/*****************************************************************************************************/
let sharedsession = require("express-socket.io-session");
let io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})