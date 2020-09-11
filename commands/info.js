exports.run = async(client, message, args) => {
    const Discord = require("discord.js");
       var embed = new Discord.MessageEmbed()
       .setDescription("**Information Serveur**")
       .addField("Nom du serveur :", message.guild.name)
       .addField("Crée le :", message.guild.createdAt)
       .addField("Tu as rejoins le :", message.member.joinedAt)
       .addField("Nombres d'utilisateurs :", message.guild.memberCount)
       .setThumbnail(message.guild.iconURL)
       .setColor("#ff8bec")

     message.channel.send(embed)
}