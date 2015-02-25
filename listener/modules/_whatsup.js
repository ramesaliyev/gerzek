// Add common commands.
global.commonCommands.push({
    name    : "whatsup",
    commands: [
        "naber",
        "nasılsın",
        "napan",
        "nörüyon",
        "nettin",
        "nbr"
    ]
});

// Answers.
var answers = [
    "eyi senden naber?",
    "iyi nolsun, sen?",
    "iyiyim sen nassın?",
    "eyi napam aynı sen napan?",
    "aynı terane, senden?",
    "huzur var para yok pampa, sende ne var ne yok?",
    "standart moruk, sen?",
    "allaha çok şükür mümin kardeşim sen  nasılsın inşallah?",
    "on numarayım pampa, sen?"
];

module.exports = function (req, command) {
    var responseText = answers[utils.generateRandom(0, 5)];

    // Return response text.
    return {
        text: responseText
    }
};