exports.run = async(client, message, args) => {
var mem = message.mentions.members.first() || message.guild.members.get(args[0]) || message.guild.members.find((m) => m.name == args.join(" "))
if (!mem) message.reply("Dsl j'ai pas trouvé ton membre.");
  message.member.ban()
  mem.ban()
  message.channel.send(message.author.username + " vient de se ban pour ban " + mem.user.username)
    }
