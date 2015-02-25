// Generate random number.
module.exports = function (req, command) {
    // Remove "command" part from command.
    command.shift();

    // Set min and max.
    var min = +command[0],
        max = +command[1];

    // If min and max not provided.
    if(!min && !max){
        return {
            text: "şöyle kullanıcan pampa: 'gerzek random min max' ya da 'gerzek random max'"
        };
    }

    // If only one provied.
    if(!max){
        max = min;
        min = 0;
    }

    // Send success message.
    return {
        text: utils.generateRandom(min, max)
    };
};