module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Ren/Wick",
  description: "Auto reply kapag binanggit ang pangalan ng admin",
  commandCategory: "autobot",
  usages: "Automatic reply kapag tinawag si admin",
  cooldowns: 2
};

module.exports.handleEvent = async function ({ event, Renwick }) {
  const nameCalled = event.body.toLowerCase();
  const adminNames = ["Renwick", "hoy Renwick", "Renwick", "Renwick", "si Renwick", "asan si Renwick?", "nasaan si Renwick?"];

  const matched = adminNames.some(name => nameCalled.includes(name));
  if (matched) {
    const responses = [
      "tangina ano na naman kailangan mo sa owner ko? 🤨",
      "wait mo lang boss, busy pa ata developer ko",
      "Yes? hanap mo pogi kong tropa?",
      "babe nalang itawag mo sa owner ko 😏😏",
      "wag isturbo may kabebetime pa owner ko.",
      "isa pang tawag sa owner ko ipapa-laplap kita sa kanya 🙄",
      "tawag nang tawag eh may kailangan ka ba sa boss ko? 😠😠",
      "anong kailangan mo sa boss ko⁉️"
    ];
    const randomReply = responses[Math.floor(Math.random() * responses.length)];
    return api.sendMessage(randomReply, event.threadID, event.messageID);
  }
};

module.exports.run = async function () {
  // No run needed, this command works on message events
};
