module.exports.config = {
	name: "termux",
    version: "1.0.1",
    permission: 0,
    credits: "BADOL-KHAN",
    prefix: true,
    description: "ask any thing",
    category: "admin",
    usages: "",
    cooldowns: 5,
    dependencies: {
        "openai": ""
    }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/3TOknP1.jpg",
            "https://i.imgur.com/IWUMdoL.jpg",
            
"https://i.imgur.com/O3MAiKX.jpg"];var callback = () => api.sendMessage({body:`termux-setup-storage →Termux App এ স্টোরেজ পারমিশন দিতে।

mkdir Folder →Termux App এ কোন ফোল্ডার তৈরি করতে। 
[mkdir= make directory]

rm -rf folder name কোন ফোল্ডার ডিলিট করতে...? 

touch file →Termux App এ 
কোন ফাইল তৈরি করতে।

Is→Termux App এ কোন কোন ফাইল এবং ফোল্ডার আছে তা দেখতে। [cat]

cd Folder-> কোন ফোল্ডারে প্রবেশ করতে।
cd .. → পূর্বের ফোল্ডারে বেক আসতে।
cd ~ →হোম ডিরেক্টারিতে বেক আসতে।
[ cd $HOME এটা দিয়ে ও বেক আসা যাবে ]
cd /sdcard→ফোনের ইন্টারনাল 
স্টোরেজে যেতে।
[cd= change directory]
***
অনেকের প্রশ্ন থাকে, ভাই টারমুক্স ইনস্টল করছি, এখন কি করবো? 

তো এই প্রশ্নটার উত্তরই দেয়ার চেষ্টা করব আমি।

প্রথমত, টারমাক্স ইন্সটল করেই কারো আইডি হ্যাক করা বা হ্যাকার হয়ে যাওয়ার চিন্তা থাকলে তা বাদ দেন। আগে শেখার উপর ফোকাস করেন।

এখন আসি টারমাক্স এর ব্যাপারে, টারমাক্স সম্পর্কে জানতে হলে আপনাকে প্রথমে লিনাক্স সম্পর্কে জানতে হবে।
