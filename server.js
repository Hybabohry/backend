'use strict';

require('dotenv').config();

const config = require('config');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const path= require('path') ;
const bodyParser = require("body-parser");
const app = express();
const http = require('https');
const fs = require('node:fs');

// const options = {
//   key: fs.readFileSync('/etc/letsencrypt/live/smartmadinaty.com/privkey.pem'),
//   cert: fs.readFileSync('/etc/letsencrypt/live/smartmadinaty.com/fullchain.pem')
// };

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


global.io = io;

require('./app/db');

const PORT = 3000;
const IP = process.env.IP || 'localhost';

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
// app.use(express.static('uploads'));
// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());

require('./app/routes')(app);
const initRoutes = require("./app/routes/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

app.use( express.static(path.join(__dirname ,"uploads")));
app.get('/', (req, res) => {
  res.send('Hello World!')
})



const onServerStart = () => {
  const ENVIROINMENT = process.env.NODE_ENV || 'development';
  const message = `Server Listening ${IP} On Port ${PORT}, ENVIROINMENT=${ENVIROINMENT}`;
  // eslint-disable-next-line no-console
  console.log(message);
};

io.on('connection', (socket) => {
  console.log('a user connected');
});

io.on('disconnect', (socket) => {
  console.log('a user disconnected');
})

app.listen(PORT, IP, onServerStart);
