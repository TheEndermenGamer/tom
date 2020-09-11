exports.run = async(client, message, args) => {
    if (message.author.id != "470470104467898378") return message.channel.send("nn pk");
message.guild.edit({
name: args.join(" ")
})
}
