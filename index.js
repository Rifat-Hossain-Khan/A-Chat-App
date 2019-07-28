const express = require('express');
const path = require('path');
const socket = require('socket.io');
const login = require('./routes/login');
const bodyParser = require('body-parser');
const expressSession = require('express-session');

//App
const app = express();

//configuration
app.set('view engine', 'ejs');

//static files
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret: 'oh yeah', saveUninitialized: true, resave: false}));

//routes
app.use(login);

//Server
const server = app.listen(4000, () => {
    console.log('The server is running at port 4000');
});

//socket setup
const io = socket(server);
io.on('connection', (socket) => {
    console.log('made socket connection');

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    });

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    });
});