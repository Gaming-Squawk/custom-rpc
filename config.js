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
        .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1136290202118279270/1260236974359576638/VID-20240612-WA0013.gif?ex=66dfaae4&is=66de5964&hm=5b9c697888c80fa13a6d6c6e742d61d71a9c3e368d525cf56035aa3d83c66710&")
        .setAssetsLargeText(" Listening to 107")
        .addButton('ADD TO SERVER', "https://discord.com/oauth2/authorize?client_id=1112673469210034256&permissions=36842105936&integration_type=0&scope=bot+applications.commands")
        .addButton('WEBSITE', "https://hydrox-music.rf.gd/");

    client.user.setPresence({
        status: "online",
        activities: [activity.toJSON()]
    });
}

module.exports = reloadPresence;
