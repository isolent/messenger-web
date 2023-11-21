import React from 'react';

const ChatList = ({ chats, onSelectChat }) => {
  return (
    <div style={{ width: '20%', borderRight: '1px solid #ccc', padding: '10px' }}>
      <h2>Chats</h2>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id} onClick={() => onSelectChat(chat.id)}>
            {chat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
