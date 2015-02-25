module.exports = function (req, res, next) {
    // Get requested text.
    var requestText = req.body.text;

    // Process words.
    var splittedText  = requestText.split(" "),
        moduleName    = splittedText[1],
        moduleItself  = global.modules[moduleName] || global.modules["other"],
        responsePayload;

    // Check if module exist for given command.
    if(moduleItself) {
        splittedText.splice(0, 1);
        responsePayload = moduleItself(req, splittedText);
    }else{
        return res.status(200).end();
    }

    // Send response.
    return res.status(200).json(responsePayload);
};