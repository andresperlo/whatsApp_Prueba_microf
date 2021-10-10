const express = require("express");
const app = express();
const router = require("./routes/index");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 3001;
const msn = [];

app.use(express.static(__dirname + "/public"));
app.use("/api", router);

io.on("connection", (socket) => {
  console.log("Usuario Conectado!");

  socket.emit("message_back", msn);
  socket.on("message_client", (data) => {
    console.log(data);
  });

  socket.on("data_client", (data) => {
    msn.push(data);
    io.sockets.emit("message_back", msn)
  });
});

server.listen(port, () => {
  console.log("Server run on port " + port);
});
