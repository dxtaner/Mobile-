import React, {createContext, useState} from 'react';

export const ChatRoomContext = createContext();

const ChatRoomContextProvider = ({children}) => {
  const [chatRooms, setChatRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);

  const addChatRoom = room => {
    setChatRooms(prevRooms => [...prevRooms, room]);
  };

  const selectChatRoom = roomId => {
    const room = chatRooms.find(r => r.id === roomId);
    if (room) {
      setCurrentRoom(room);
    }
  };

  const value = {
    chatRooms,
    currentRoom,
    addChatRoom,
    selectChatRoom,
  };

  return (
    <ChatRoomContext.Provider value={value}>
      {children}
    </ChatRoomContext.Provider>
  );
};

export default ChatRoomContextProvider;
