// Require modules.
var readdirectory = require("../../common/readdirectory");

// Load modules.
var cron        = require('cron').CronJob,
    postToSlack = require('../../common/posttoslack');

// Register cron job.
global.registerCronJob = function(timeRange, stringToPost){
    var job = new cron({
        cronTime: timeRange,
        onTick  : function() {
            postToSlack({
                text        : "@everyone -> "+stringToPost,
                parse       :  "full",
                link_names  : 1
            });
        },
        start   : false,
        timeZone: "Europe/Istanbul"
    });
    job.start();
};

// Read all directory.
readdirectory(__dirname, exports);




