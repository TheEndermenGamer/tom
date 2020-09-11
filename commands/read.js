exports.run = async (client, message, args) => {
const Discord = require("discord.js");
const nhentai = require('nhentai-js')

async function getDoujin(id){

  try{ // try/catch is the equivalent of Promise.catch() in async/await

      const val = await nhentai.getDoujin(id)

      return val

  }catch(err){

      console.error(err);

  }

}
 
 

//  if (!message.channel.nsfw) return message.channel.send("wallah gros c'est trop sale envoie ça dans un nsfw stp");
  if (!args[0]) return message.channel.send("faut écrire un nombre enculé");
 
  getDoujin(args[0]).then((data) => {
    var ouais = data.pages;
 
 
 
    var index = 0
    var nigger = new Discord.MessageEmbed();
    nigger
      .setTitle(data.title)
      .setImage(ouais[0])
      .setFooter("bon app bg")
      .setColor("#ff8bec")
    message.reply(nigger).then(async (sentNigger) => {
      await sentNigger.react("👈")
      await sentNigger.react("👉")
      await sentNigger.react("❌")
      await sentNigger.react("🤛")
      await sentNigger.react("🤜")
          let filter = (reaction, user) => ["👈","👉", "❌","🤜","🤛"].includes(reaction.emoji.name) && !user.bot
          let collector = sentNigger.createReactionCollector(filter, {time: 300000})
      collector.on('collect', r => {
        r.users.remove(message.author);
        var em = r.emoji.name
	      if (em == "👈") {
            index -= 1
            nigger.setImage(ouais[index])
            nigger.setFooter("page: " + index)
            sentNigger.edit(nigger)
        } else if (em == "👉") {
            index++
            nigger.setImage(ouais[index])
            nigger.setFooter("page: " + index)
            sentNigger.edit(nigger)
        } else if (em == "🤜") {
            index = ouais.length - 1
            nigger.setImage(ouais[index])
            nigger.setFooter("page: " + index)
            sentNigger.edit(nigger)        
        } else if (em == "🤛") {
            index = 0
            nigger.setImage(ouais[index])
            nigger.setFooter("page: " + index)
            sentNigger.edit(nigger)
        } else { 
            sentNigger.delete(nigger)
            message.channel.send("tkt le s j'ai viré ça ✌")
            collector 
        }
      });
      collector.on('end', collected => {
        sentNigger.delete()
      });
    });
  });
};
