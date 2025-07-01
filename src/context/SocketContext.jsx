import React, { createContext, useEffect } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext();

const socket = io(`${import.meta.env.VITE_BASE_URL}`);

const SocketProvider = ({ children }) => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Frontend socket.id:", socket.id);
      console.log("Socket connected, id:", socket.id);
      console.log("Connected to server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected to server");
    });
  }, [socket]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {" "}
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
