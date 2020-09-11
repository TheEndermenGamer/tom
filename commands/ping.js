exports.run = async (client, message, args) => {
let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

let uptime = `${hours} heures et ${minutes} minutes`;

  const Discord = require("discord.js");
  let embed = new Discord.MessageEmbed()
    .setAuthor("Ping actuel : ")
    .setTitle(":ping_pong:     **" + Math.round(client.ws.ping) + " ms**")
    .setDescription("Uptime: **" + uptime + "**")
    .setColor("#ff8bec");
  message.channel.send(embed);
};
