module.exports = function (req, command) {
    // Response payload.
    var responsePayload = null;

    // Look out for common commands.
    global.commonCommands.forEach(function(module){
        // Return if responsePayload attached.
        if(responsePayload !== null) return;

        // Check if module commands include given command.
        var isInclude = module.commands.indexOf(command[0]);

        // If include.
        if(isInclude !== -1){
            // Send command to module.
            responsePayload = global.modules[module.name](req, command);
        }
    });

    // If there is no module.
    if(responsePayload === null) {
        responsePayload = {
            text: "Kanka pek anlamadım."
        };
    }

    return responsePayload;
};