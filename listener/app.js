// Require and create server.
var Server = require("../common/server"),
    server = new Server();

// Get modules.
var listener    = require("./listener");
    utils       = require("../common/utils");
    modules     = require("./modules");

// Assign listener to listen every communication over 'gerzek'.
server.app.post('/gerzek', listener);

// Listen port.
server.listen(3000, function(){
    console.log("Listener has initialized.");
});