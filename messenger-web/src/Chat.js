import React, { useState, useEffect } from 'react';
import "./Chat.css"
const Chat = ({ chatId }) => {
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

  useEffect(() => {
    const fetchMessages = async () => {
      if (chatId) {
        try {
          const response = await fetch(`your-api-endpoint/chats/${chatId}/messages`);
          const data = await response.json();
          setMessages(data);
        } catch (error) {
          console.error('Error fetching messages:', error);
        }
      }
    };

    fetchMessages();
  }, [chatId]);

  return (
    <div style={{ flex: 1, padding: '10px' }}>
      <h2>Chat</h2>
      <div style={{ height: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))}
      </div>
      
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
    </div>
  );
};

export default Chat;
