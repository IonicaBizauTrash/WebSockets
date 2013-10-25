(function (window) {

    function ready () {
        var socket = io.connect(location.origin);

        this.socketInit({}, function (err) {

            console.log(err);

            socket.on('message', function(data) {
                alert(data);
            });
        });
    }

    function sendMessage () {

    }

    window.webSockets = {
        ready: ready
    }
})(window);
