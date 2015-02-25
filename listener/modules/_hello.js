// Add common commands.
global.commonCommands.push({
    name    : "hello",
    commands: [
        "selam",
        "hi",
        "hello",
        "selamınaleyküm",
        "merhaba",
        "slm",
        "selams",
        "mrb"
    ]
});

// Answers.
var answers = [
    "selam",
    "ooo kimler gelmiş selam pampa",
    "welcome canım",
    "meyaba",
    "melaba",
    "hi canım",
    "ooo bro hoşgeldin",
    "slm.",
    "Merhaba."
];

module.exports = function (req, command) {
    var responseText = answers[utils.generateRandom(0, 5)];

    // Return response text.
    return {
        text: responseText
    }
};