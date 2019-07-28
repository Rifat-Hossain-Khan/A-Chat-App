//make connection
const socket = io.connect('http://localhost:4000');

//query dom

const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

//emit events
 emithandler = () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
 };

btn.addEventListener('click', () => {
    emithandler();
});

message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value);
});

socket.on('chat', (data) => {
    feedback.innerHTML = '';
    message.value = '';
    output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});

socket.on('typing', (data) => {
    feedback.innerHTML = '<p><em>' + data + ' is typing....</em></p>';
});