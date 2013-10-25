M.on("sockets.ready", function () {
    M.emit("sockets.listen", {
        event: "connection"
    }, function (socket) {
        console.log("Welcome, new user!");
        socket.emit("message", "Welcome!");
    });

    M.emit("sockets.listen", {
        event: "newMessage"
    }, function (data) {
        console.log(",,,,,");
        console.log(data);
    });
});
