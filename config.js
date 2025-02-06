const discord = require("discord.js");

function reloadPresence(client) {
    global.startTime = global.startTime || Date.now();

    const activity = {
        name: "HYDROX.IN",
        type: "WATCHING",
        details: "HYDROX.IN",
        state: "Hydrox.in — Innovation Starts Here.",
        startTimestamp: global.startTime,
        largeImageKey: "large_image_key", // Set in Discord Developer Portal
        largeImageText: "WATCHING TO 2 BOTS",
        buttons: [
            { label: 'Instagram', url: "https://www.instagram.com/hydrox.in" },
            { label: 'DISCORD', url: "https://discord.gg/3hQsPgkVyd" }
        ]
    };

    client.user.setPresence({
        status: "online",
        activities: [activity]
    });
}

module.exports = reloadPresence;