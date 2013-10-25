(function (window) {

    var socket;
    function ready () {

        socket = io.connect(location.origin);

        this.socketInit({}, function (err) {

            console.log(err);

            socket.on('message', function(data) {
                $(".message").after(data + "<br/>");
            });
        });

        $(".message").on("keyup", function (e) {
            if (e.keyCode !== 13) {
                return;
            }

            sendMessage($(this).val());
        });
    }

    function sendMessage (message) {
        socket.emit("newMessage", message);
    }

    window.webSockets = {
        ready: ready
    }
})(window);
