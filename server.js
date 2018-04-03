// var express = require('express');
// var app = express();
// var http = require('http').Server(app);
// var socket = require('socket.io');
// var io = socket(http)
// var path = require('path');

// app.use express.static(__dirname + '/public')
// app.get('/', function(req, res){
// res.sendFile(path.join(__dirname+ "/views/index.html"));
// });

// users = [];
// io.on('connection', function(socket){
// console.log('A user connected');
// socket.on('setUsername', function(data){
// console.log(data);
// if(users.indexOf(data) > -1){
// socket.emit('userExists', data + ' username is taken! Try some other username.');
// }
// else{
// users.push(data);
// socket.emit('userSet', {username: data});
// }
// });
// socket.on('msg', function(data){
// Send message to everyone
// io.sockets.emit('newmsg', data);
// })
// });

// app.listen(7000, function(){
// console.log('listening on localhost:7000');
// });

//export default app;

var express = require('express');
var path = require('path');
var app = express();
var http = require('http')
var socketio = require('socket.io');
var server = http.Server(app);
var websocket = socketio(server);

// Define the port to run on
app.set('port', 3002);

app.use(express.static(path.join(__dirname, 'public')));


var users = [];
websocket.on('connection', (socket) => {
  console.log('A user connected');
  // socket.on('setUsername', function (data) {
  //   console.log(data);
  //   if (users.indexOf(data) > -1) {
  //     socket.emit('userExists', data + ' username is taken! Try some other username.');
  //   }
  //   else {
  //     users.push(data);
  //     socket.emit('userSet', { username: data });
  //   }
  // });
  socket.on('userJoined', (userId) => onUserJoined(userId, socket));
  socket.on('newmsg', function (data) {
    console.log("message  showing")
    console.log(data)
    //Send message to everyone
  })

  socket.on('msg', (msg) => onMessageReceive(msg, socket))
  socket.on('typingOn',(typingOn)=>onMessageTyping(typingOn, socket))
});


function onUserJoined(user, socket) {
  console.log("a new user joined.....");
  console.log(user);
  console.log(".......................");
  //console.log(socket);
  // try {
  //   // The user is null for new users.
  //   if (!user._id) {
  //     var user = db.collection('users').insert(user, (err, user) => {

  //       socket.emit('userJoined', user);
  //       users[socket.id] = user._id;
  //       _sendExistingMessages(socket);
  //     });
  //   } else {
  //     users[socket.id] = user._id;
  //     _sendExistingMessages(socket);
  //   }
  // } catch (err) {
  //   console.err(err);
  // }
}

function onMessageReceive(msg, socket) {
  console.log("message to all")
  console.log(msg)
  //Send message to everyone
  //socket.broadcast.emit('newmsg', msg);
}
function onMessageTyping(typingOn, socket){
  console.log(typingOn)
  }

// Listen for requests
// server= app.listen(app.get('port'), function () {
server.listen(app.get('port'), function () {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});