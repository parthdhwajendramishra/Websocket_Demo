
//JavaScript library Socket.IO to establish 
//a WebSocket connection with a server running on 'ws://localhost:8080'.
const socket = io('ws://localhost:8080');


//a listener for the 'message' event, which will be triggered when
// the server sends a message. 
//When the 'message' event is received, the code creates
// a new list item (li) element and sets its innerHTML to
// the text of the message received.
// The newly created li element is then appended to an existing unordered list element (ul) on the page.
socket.on('message', text => {

    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el)

});


//The document.querySelector('button').onclick = () => {...} function sets up
// a click event listener for a button on the page. 
//When the button is clicked, the code retrieves the value of an input element (input) 
//on the page and sends it to the server using the socket.emit('message', text) function. 
//This emits a 'message' event to the server with the input text as its payload.


document.querySelector('button').onclick = () => {

    const text = document.querySelector('input').value;
    socket.emit('message', text)

}


// Overall, this code sets up a bi-directional communication channel 
//between the client (browser) and the server using web sockets, 
//and updates the page with new messages received from the server. 
//The user can also send messages to the server by entering text in
// the input field and clicking the button.