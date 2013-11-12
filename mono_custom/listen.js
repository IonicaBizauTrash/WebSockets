M.on("message", function (optionData) {
    M.emit('sockets.send', {
        type: 'all',
        event: 'message',
        data: optionData
    });
});
