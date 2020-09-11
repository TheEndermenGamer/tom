exports.run = async (client, message, args) => {
  const Discord = require("discord.js");
  var member = message.mentions.users.first() || message.author;
  let embed = new Discord.MessageEmbed()
    .setImage(member.avatarURL({ dynamic: true, size: 4096 }))
    .setDescription("[Lien Original](" + member.avatarURL({ dynamic: true, size: 4096 }) + ")")
    .setColor("#ff8bec");
  message.channel.send(embed);
};
