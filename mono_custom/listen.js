M.on("sockets.ready", function () {
    M.emit("sockets.listen", {
        event: "connection"
    }, function (socket) {
        socket.emit("message", "Welcome!");
    });
});
