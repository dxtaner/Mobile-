const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

let users = {};

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("sendLocation", (data) => {
    users[socket.id] = data;

    io.emit("usersLocation", users);
  });

  socket.on("disconnect", () => {
    delete users[socket.id];

    io.emit("usersLocation", users);
  });
});

server.listen(3000, () => {
  console.log("Server running");
});
