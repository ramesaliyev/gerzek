var youtube     = require('youtube-feeds'),
    postToSlack = require('../../common/posttoslack');

// Search on youtube.
module.exports = function (req, command) {
    // Remove "command" part from command.
    command.shift();

    // Get second command.
    var toDo = command[0];

    // Join rest.
    command.shift();
    var searchText = command.join(" ");

    // If there is no search text.
    if (!searchText.length) {
        return {
            text: "şöyle kullanıcan pampa: 'gerzek youtube <getir|ara> <aranacak şey>'"
        }
    }

    // Search on youtube.
    youtube.feeds.videos({q: searchText, 'max-results': 9}, function(err, data){
        // Create respond details.
        var respondMessage  = "@"+ req.body.user_name +" -> '"+ searchText +"' laflarıyla aradım; ",
            respondData     = {},
            youtubeLink     = "http://www.youtube.com/watch?v=";

        // If error.
        if(err){
            respondMessage += "ya bi bok bulamadım ya da başka bi sıkıntı çıktı. ("+ err.message +")"
        }else{
            if(toDo === "getir"){
                respondMessage += youtubeLink+data.items[0].id;
            }else{
                // Do not unfurl link.
                respondData.unfurl_links = false;
                respondData.parse        = "none";

                // Break line.
                respondMessage += "\n";

                data.items.forEach(function(item){
                    respondMessage += "- <"+ youtubeLink + item.id + "|"+item.title+"> \n";
                });
            }
        }

        // Set respond data details.
        respondData.username    = "gerzek (youtube)";
        respondData.text        = respondMessage;
        respondData.link_names  = 1;

        // Post to slack.
        postToSlack(respondData);
    });

    return {
        text: "arıyorum pampa."
    }
};