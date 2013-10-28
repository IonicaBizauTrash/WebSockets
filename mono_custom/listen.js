M.on("sockets.ready", function () {
    console.log("Sockets are ready on the server side.");

    var clients = [];

    M.emit("sockets.listen", {
        event: "connection"
    }, function (client) {
        console.log("Welcome, new user!");

        clients.push(client);

        M.emit("sockets.listen", {
            event: "message",
            client: client
        }, function (data) {
            for (var i = 0; i < clients.length; ++i) {
                clients[i].emit("message", data);
            }
        });

        client.emit("message", "Welcome!");
    });
});
