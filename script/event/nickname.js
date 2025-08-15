let config = {};
try {
    config = require("../config.json");
} catch (e) {
    config.botName = " Renwick| 𝙴𝚌𝚑𝚘 𝙰𝙸";
}

module.exports.config = {
    name: "Azaleano",
    version: "1.0.1",
    role: 0,
    description: "Automatically sets the bot's nickname when added to a group.",
    prefix: false,
    premium: false,
    credits: "Vern",
    cooldowns: 0,
    category: "system",
    handleEvent: true
};

module.exports.handleEvent = async function ({ api, event }) {
    try {
        if (
            event.logMessageType === "log:subscribe" &&
            event.logMessageData &&
            Array.isArray(event.logMessageData.addedParticipants) &&
            event.logMessageData.addedParticipants.some(user => user.userFbId === api.getCurrentUserID())
        ) {
            const botID = api.getCurrentUserID();
            const botName = config.botName || "🤖 | 𝙴𝚌𝚑𝚘 𝙰𝙸";

            api.changeNickname(botName, event.threadID, botID, (err) => {
                if (err) return console.error("❌ Failed to set nickname:", err);
                // Optionally, notify group
                // api.sendMessage(`🤖 My nickname has been set to '${botName}'!`, event.threadID);
            });
        }
    } catch (error) {
        console.error("❌ Error in nickname event handler:", error);
    }
};
