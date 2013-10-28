(function (window) {

    function ready () {

        var socket = this.socket;
        socket.on('message', function(data) {
            $(".message").after("<br/>" + data);
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
