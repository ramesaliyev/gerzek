module.exports = function(dirname, _exports){
    // Require modules.
    var path = require("path"),
        fs   = require("fs");

    // Get path.
    var normalizedPath = path.join(dirname);

    // Read directory.
    fs.readdirSync(normalizedPath).forEach(function(file) {
        // If file starts with underscore.
        if(file[0] === "_"){
            // Require all files.
            file = file.replace("_", "").replace(".js", "");
            _exports[file] = require(normalizedPath +"/_"+ file);
        }
    });
};