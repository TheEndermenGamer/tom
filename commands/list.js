exports.run = async(client, message, args) => {
var text = ""
client.guilds.cache.forEach((guild) => {
text += guild.name + " - " + guild.owner.user.username + "\n"
});
text;
message.channel.send(text)
}