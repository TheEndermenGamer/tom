exports.run = async(client, message, args) => {
const Discord = require("discord.js");
        if (message.author.id != "470470104467898378") return message.channel.send("non <@" + message.author + "> tu fais pas ça énorme connard");
function clean(text) {
  if (typeof(text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" +                   String.fromCharCode(8203));
  else return text;
}

        const code = args.join(" ");

        try {


          let evaled = eval(code);
          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
          let evalembed = new Discord.MessageEmbed()
.setTitle('Eval code')
.addField(`Input : `, `\`\`\`js\n ${code} \n\`\`\``)
.addField(`Output : `, `\`\`${clean(evaled)}\`\``)
message.channel.send(evalembed)
        } catch (err) {
         let evalembed = new Discord.MessageEmbed()
.setTitle('Eval code')
.addField(`Input : `, `\`\`\`js\n ${code} \n\`\`\``)
.addField(`**Erreur :**`,`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``)
.setColor('#ff0505')
message.channel.send(evalembed)
        }
}