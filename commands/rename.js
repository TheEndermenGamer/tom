const Discord = require("discord.js");

exports.run = async(client, message, args) => {
client.user.setUsername(args.join(" "))
}