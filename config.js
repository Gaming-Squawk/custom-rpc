const discord = require("discord.js-selfbot-v13");

function reloadPresence(client, index) {
    // Ensure global.startTime is set
    if (!global.startTime) {
        global.startTime = Date.now();
    }

    const activity = new discord.RichPresence()
        .setApplicationId("1256607227444330606") // Replace with your own bot application id
        .setType("LISTENING")
        .setName("HYDROX.IN")
        .setDetails("HYDROX.IN")
        .setState("Hydrox.in — Innovation Starts Here.")
        .setStartTimestamp(global.startTime)
        .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1136290202118279270/1336937152310808617/Messenger_creation_505325565457880.jpg?ex=67a59f40&is=67a44dc0&hm=c80b2b42e55907f138e8c52376780827d96338c202cb6d70be2188535908877d&")
        .setAssetsLargeText("WATCHING TO 2 BOTS")
        .addButton('Instagram', "https://www.instagram.com/hydrox.in?igsh=MXgwM3BzZTdkMDg4cA==")
        .addButton('DISCORD', "https://discord.gg/hnRzctST");

    client.user.setPresence({
        status: "online",
        activities: [activity.toJSON()]
    });
}

module.exports = reloadPresence;
