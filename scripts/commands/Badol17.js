const fs = require("fs");
module.exports.config = {
	    name: "bye",
    version: "1.1.0",
    permission: 0,
    credits: "BADOL-KHAN",
    description: "noprefix",
    prefix: true,
    category: "commands",
    usages: "bye",
    cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("বাই")==0 || event.body.indexOf("Bye bye")==0 || event.body.indexOf("Bye")==0 || event.body.indexOf("Ok bye")==0) {
		var msg = {
				body: "ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝐁𝐨𝐭-𝐎𝐰𝐧𝐞𝐫-𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿",
				attachment: fs.createReadStream(__dirname + `/BADOL-KHAN/byebye.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤦‍♂️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
