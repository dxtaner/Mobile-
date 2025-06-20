import React from 'react';
import Router from './Router.js';
import ChatRoomContextProvider from './context/ChatRoomContext.js';

export default () => {
  return (
    <ChatRoomContextProvider>
      <Router />
    </ChatRoomContextProvider>
  );
};
