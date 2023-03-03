// This code creates a server using Node.js and Socket.io,
// which allows for real-time communication between the server and connected clients.

//The first line requires the http module from Node.js, 
//which is then used to create an HTTP server with the createServer() method.
const http = require('http').createServer();

//The second line requires the socket.io module, 
//which is then initialized with the http server created earlier, 
//along with some configuration options. 
//The cors option is set to allow requests from any origin, which is specified with the origin: "*" property.

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});


//The io object then listens for incoming connections with the on() method, 
//and logs a message to the console when a user connects.

io.on('connection', (socket) => {
    console.log('a user connected');

    //The socket object then listens for incoming messages with the on() method, 
    //and logs the message to the console. 
    socket.on('message', (message) => {
        console.log(message);
        //It then emits the message to all connected clients with the io.emit() method,
        //along with a modified version of the message that includes the ID of the sending client.
        io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
    });
});

//the server listens on port 8080 with the http.listen() method,
http.listen(8080, () => console.log('listening on http://localhost:8080'));


