(function (window) {

    function ready () {

        socket = io.connect(location.origin.substring(5));

        this.socketInit({}, function (err) {

            console.log(err);

            socket.on('message', function(data) {
                $(".message").after("<br/>" + data);
            });
        });

        $(".message").on("keyup", function (e) {
            if (e.keyCode !== 13) {
                return;
            }

            socket.emit("message", $(this).val());
            $(this).val("");
        });
    }


    window.webSockets = {
        ready: ready
    }
})(window);
