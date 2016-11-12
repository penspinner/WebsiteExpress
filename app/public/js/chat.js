$(function()
{
  var socket = io();
  var chatUsername = document.querySelector('#chat-username');
  var chatMessage = document.querySelector('#chat-message');

  socket.on('connect', function()
  {
      var chatForm = document.forms.chatForm;

      if (chatForm)

          chatForm.addEventListener('submit', function(e)
          {
              e.preventDefault();
              socket.emit('postMessage', { username: chatUsername.value, message: chatMessage.value });
              chatMessage.value = '';
              chatMessage.focus();
          });

          socket.on('updateMessages', function(data)
          {
              showMessage(data);
          });
      }
  });
});

=======
var socket = io();
var chatUsername = document.querySelector('#chat-username');
var chatMessage = document.querySelector('#chat-message');

socket.on('connect', function()
{
    var chatForm = document.forms.chatForm;
    
    if (chatForm)
    {

        chatForm.addEventListener('submit', function(e)
        {
            e.preventDefault();
            socket.emit('postMessage', { username: chatUsername.value, message: chatMessage.value });
            chatMessage.value = '';
            chatMessage.focus();
        });
        
        socket.on('updateMessages', function(data)
        {
            showMessage(data);
        });
    }
});


>>>>>>> ff4e5ac19c8e5505868c72e3555a08bf5b7b542d
function showMessage(data)
{
    var chatDisplay = document.querySelector('.chat-display');
    var newMessage = document.createElement('p');
    
    if (chatUsername.value == data.username)
        newMessage.className = 'bg-success chat-text';
    else        
        newMessage.className = 'bg-info text-warning chat-text';
    
    newMessage.innerHTML = '<strong>' + data.username + '</strong>: ' + data.message;
    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
}
