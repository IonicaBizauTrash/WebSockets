(function (window) {

    function ready () {

        var self = this;
        self.clientListen({event: 'message'}, function(data) {
            $(".message").after("<br/>" + data);
        });

        $(".message").on("keyup", function (e) {
            if (e.keyCode !== 13) {
                return;
            }

            self.serverEmitGlobal({event: "message", data: $(this).val()});
            $(this).val("");
        });

    }

    window.webSockets = {
        ready: ready
    }
})(window);
