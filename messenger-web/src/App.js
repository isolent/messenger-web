import React, { useState, useEffect } from 'react';
import ChatList from './Chatlist';
import Chat from './Chat';

const App = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // Fetch chats from your API
    const fetchChats = async () => {
      try {
        const response = await fetch('your-api-endpoint/chats');
        const data = await response.json();
        setChats(data);
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };

    fetchChats();
  }, []);

  const selectChat = (chatId) => {
    setSelectedChat(chatId);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <ChatList chats={chats} onSelectChat={selectChat} />
      <Chat chatId={selectedChat} />
    </div>
  );
};

export default App;
