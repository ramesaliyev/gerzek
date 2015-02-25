module.exports = {
    generateRandom: function(min, max){
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
        return Math.min(max, Math.max(min, random));
    }
};