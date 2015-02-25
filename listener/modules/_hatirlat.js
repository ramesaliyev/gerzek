var schedule    = require('node-schedule'),
    postToSlack = require('../../common/posttoslack'),
    moment      = require('moment-timezone');

// Hatirlat.
module.exports = function (req, command) {
    // Remove "hatirlat" part from command.
    command.shift();

    // Join command and then parse by ":".
    command = command.join(" ").split(":");

    // Take first part as remind date and rest as remind message.
    var remindDate = command.splice(0, 1).join(""),
        remindText = command.join(":");

    // Show help if date or text not provided.
    if(remindDate.length < 1 || remindText.length < 1){
        return {
            text: "şöyle kullancan pampa: 'gerzek hatirlat <saat> [dakika] [gun] [ay] [yil] : <hatirlatma metni>'"
        }
    }

    // Parse date
    remindDate = remindDate.split(" ");

    // Get current date.
    var currentMoment = moment().tz("Europe/Istanbul");

    // Set provided dates.
    currentMoment.hour(remindDate[0]);
    if (remindDate[1]) currentMoment.minute(remindDate[1]);
    if (remindDate[2]) currentMoment.date(remindDate[2]);
    if (remindDate[3]) currentMoment.month(remindDate[3] - 1);
    if (remindDate[4]) currentMoment.year(remindDate[4]);

    // Convert to server time zone.
    var timezoneMoment = currentMoment.clone().tz("America/New_York");

    // Create js remind date object.
    var jsRemindDate = new Date(
        timezoneMoment.year(),
        timezoneMoment.month(),
        timezoneMoment.date(),
        timezoneMoment.hour(),
        timezoneMoment.minute(),
        0
    );

    // Correct urls.
    remindText = remindText.replace(/<(.*)\|(.*)>/g, "$1");

    // Schedule job.
    schedule.scheduleJob(jsRemindDate, function(){
        postToSlack({
            username    : "gerzek (hatirlatma)",
            text        : "@"+ req.body.user_name +" -> "+ remindText,
            link_names  : 1
        });
    });

    // Send success message.
    return {
        text: "tamam hatırlatıcam pampa."
    }
};