// Server constructor.
var Server = function () {
    // Constants.
    var express     = require('express'),
        bodyParser  = require('body-parser');

    // Private.
    this.app    = express();

    // Parse body.
    this.app.use(bodyParser.urlencoded({
        extended: true
    }));
};

// Listen port.
Server.prototype.listen = function (port, callback) {
    this.port = port;
    this.app.listen(this.port, callback);
};

// Export module.
module.exports = Server;