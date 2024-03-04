const fs = require("fs");
module.exports.config = {
	    name: "biya",
    version: "1.1.0",
    permission: 0,
    credits: "BADOL-KHAN",
    description: "noprefix",
    prefix: true,
    category: "commands",
    usages: "biya",
    cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Biya korbo")==0 || event.body.indexOf("বিয়া করমু")==0 || event.body.indexOf("বিয়া করবো")==0 || event.body.indexOf("Biya kormu")==0) {
		var msg = {
				body: "ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝐁𝐨𝐭-𝐎𝐰𝐧𝐞𝐫-𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿",
				attachment: fs.createReadStream(__dirname + `/BADOL-KHAN/biya.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤦‍♂️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
