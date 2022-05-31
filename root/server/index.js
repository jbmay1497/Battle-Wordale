"use strict";
let port = 9000;

let express = require('express'),
    path = require("path"),
    logger = require("morgan"),
    session = require("express-session"),
    cors = require("cors");

let app = express();
let http = require("http").Server(app);
app.use(cors());
app.use(logger("dev"));
app.engine("pug", require("pug").__express);

/*****************************************************************************************************/
let expSession = session({
    name: "session",
    secret: "onemoretime",
    resave: false,
    saveUninitialized: true,
    cookie: {
        path: "/",
        maxAge: null
    }
});

app.use(expSession);

let sharedsession = require("express-socket.io-session");
let io = require('socket.io')(http);
io.use(sharedsession(expSession));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

io.on('connection', socket => {
    console.log('A user connected');


    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})