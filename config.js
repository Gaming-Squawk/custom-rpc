const discord = require("discord.js-selfbot-v13");

function reloadPresence(client, index) {
    // Ensure global.startTime is set
    if (!global.startTime) {
        global.startTime = Date.now();
    }

    const activity = new discord.RichPresence()
        .setApplicationId("1256607227444330606") // Replace with your own bot application id
        .setType("Watching")
        .setName("HYDROX.IN")
        .setDetails("HYDROX.IN")
        .setState("Hydrox.in — Innovation Starts Here.")
        .setStartTimestamp(global.startTime)
        .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1136290202118279270/1336937152310808617/Messenger_creation_505325565457880.jpg?ex=67a59f40&is=67a44dc0&hm=c80b2b42e55907f138e8c52376780827d96338c202cb6d70be2188535908877d&")
        .setAssetsLargeText("WATCHING TO 2 BOTS")
        .addButton('https://cdn.discordapp.com/attachments/1136290202118279270/1336937713365942282/instagram.png?ex=67a59fc5&is=67a44e45&hm=e6bbbe0f9edc261fb904ec05d508dd1458d31e96a38d2631802839d1aac404b5& Instagram', "https://discord.com/oauth2/authorize?client_id=1112673469210034256&permissions=36842105936&integration_type=0&scope=bot+applications.commands")
        .addButton('WEBSITE', "https://hydrox-music.rf.gd/");

    client.user.setPresence({
        status: "online",
        activities: [activity.toJSON()]
    });
}

module.exports = reloadPresence;
