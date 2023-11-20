// src/Messenger.js
import React, { useState } from 'react';

const Messenger = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim() === '') return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length, text: message, sender: 'User' }, // Replace with user authentication logic
    ]);

    setMessage('');
  };

  return (
    <div>
        <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..."
        />
        <button type="submit">Send</button>
      </form>
      <div style={{ height: '400px', overflowY: 'scroll' }}>
        {messages.map((msg) => (
          <div key={msg.id}>
            <p>
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Messenger;
