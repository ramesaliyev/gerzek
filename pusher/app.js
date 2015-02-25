// Require and create server.
var Server = require("../common/server"),
    server = new Server();

// Get modules.
var modules = require("./modules");

// Listen port.
server.listen(3001, function(){
    console.log("Pusher has initialized.");
});