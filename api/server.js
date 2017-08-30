// Se establecen las dependencias que Node va a utilizar
var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose');

// Se establece una conexión con mongoose por medio de las siguientes variables
var db = mongoose.connection,
    dburl = 'mongodb://root:root@ds161823.mlab.com:61823/db_examen',
    port = 3000;
// se le indica al servidor la tarea a ejecutar
var server = app.listen(port,_server());
var io = require('socket.io').listen(server);

// Se define la conexion con mongoose
mongoose.connect(dburl);
// Se define las respuestas del servidor
db.on('error', console.error.bind(console, 'error de conexion:'));
db.on('open', function(){
  console.log('Base de datos conectada correctamente');
})
// recarga los metodoss
io.sockets.on('connection', function (socket) {
  socket.emit('news', { msg: 'Hello client - from : server'});
  socket.on('echo', function (data) {
    console.log(data);
  });
});
// Por medio de express se genera la conexión entre el index.js, server.js y el front-end
app.use(express.static(path.join(__dirname, 'public')));

// Se indica que el formato en el que se reciben los datos va a ser JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

// Se definen los verbos que express va a reconocer como parte de la petición que se realiza desde el front-end (public)
app.use( function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Se definen las rutas que van estar ligadas a toda la funcionalidad de la aplicacion
var index = require('./index');

userRoutes = require('./components/users/user.route');
propertiesRoutes = require('./components/properties/properties.route.js');


// Se definen las rutas de los servicios con las que se conecta el front-end
app.use('/api',propertiesRoutes);
app.use('/api',userRoutes);
app.use('/', index);

// Se guarda todo lo que se ha realizado
module.exports = app;


function _server(){
  console.log('Conexion establecida en el puerto ' + port);
}
