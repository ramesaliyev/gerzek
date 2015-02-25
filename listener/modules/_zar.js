// Generate random number.
module.exports = function (req, command) {
    // Remove "command" part from command.
    command.shift();

    // Send success message.
    return {
        text: utils.generateRandom(1,6) +" "+ utils.generateRandom(1,6)
    };
};