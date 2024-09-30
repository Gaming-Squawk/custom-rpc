const discord = require("discord.js-selfbot-v13");

function reloadPresence(client, index) {
    // Ensure global.startTime is set
    if (!global.startTime) {
        global.startTime = Date.now();
    }

    const activity = new discord.RichPresence()
        .setApplicationId("1256607227444330606") // Replace with your own bot application id
        .setType("LISTENING")
        .setName("HYDROX MUSIC")
        .setDetails("HYDROX MUSIC")
        .setState("ENJOY MUSIC EFFORTLESSLY")
        .setStartTimestamp(global.startTime)
        .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1136290202118279270/1287750793084276776/VID-20240612-WA0013.gif?ex=66fbe962&is=66fa97e2&hm=25b4115e97edd7f3a488cc46857aa32b3aa4c396374667ebcc9ddd8507d9d3e1&")
        .setAssetsLargeText(" Listening to 131 servers")
        .addButton('ADD TO SERVER', "https://discord.com/oauth2/authorize?client_id=1112673469210034256&permissions=36842105936&integration_type=0&scope=bot+applications.commands")
        .addButton('WEBSITE', "https://hydrox-music.rf.gd/");

    client.user.setPresence({
        status: "online",
        activities: [activity.toJSON()]
    });
}

module.exports = reloadPresence;
