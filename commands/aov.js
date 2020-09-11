const Discord = require("discord.js")
var fs = require("fs")
exports.run = async(client, message, args) => {
var deck;
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function getArr(myMap) {
  var keys = [];
  for (let key in myMap) {
  keys.push(key);
  }
      return keys;
  }
  var maped = {}
  maped[message.author.id] = {
    lives : 5,
    host : true
  }
  var baseMess = "Bienvenue sur le Action Ou Vérité. écris je participe putain si tu veux bah participer.\n" + ":crown: " + message.author.username

  message.channel.send(baseMess).then((sentMessage) => {
    let collector = new Discord.MessageCollector(message.channel, m => !m.author.bot, { time: 600000 });
	  collector.on('collect', m => {
      if (m.content.toLowerCase() == "je participe putain") {
        message.delete()
      if (!maped[m.author.id]) {
        maped[m.author.id] = {
          lives : 5
        }
       baseMess += "\n" + m.author.username
        sentMessage.edit(baseMess)
        message.channel.send("cc")
        console.log(maped)
      }

      }
      else if (m.content.toLowerCase() == "degage moi de la") {
        maped[m.author.id] = undefined
        message.channel.send("c'est bon on t'a jamais aimé tfacon fdp")
      }
      else if (m.content.toLowerCase() == "c'est bon on commence bg") {
        if (!maped[m.author.id]) return message.channel.send("gros t'es même pas dans la partie pk tu parles");
        if (!maped[m.author.id].host) return message.channel.send("ok boomer.");
        collector.stop()
      }
    })
    collector.on('end', function() {
      message.channel.send("c'est bon on commence")
      sentMessage.delete()
      start()
    })

  })

  function start() {
    var filter = (reaction, user) => {
	return ["🅰️","🅱️","🇨"].includes(reaction.emoji.name) && user.id == message.author.id && !user.bot;
};
    message.channel.send("Quel mode veux-tu choisir bg?\nA - Custom (les potes choisissent)\nB - À la demande (le bot choisit)\nC - Mode Histoire (commencez l'histoire)(pas encore dispo bg t'as cru quoi)").then(async (Mess) => {
  await Mess.react("🅰️");
  await Mess.react("🅱️");
  await Mess.react("🇨");

  let collector = Mess.createReactionCollector(filter, { time: 15000 });

  collector.on('collect', (reaction, reactionCollector) => {
	  if (reaction.emoji.name == "🅰️") {
      Mess.delete()
      message.channel.send("On débute le MODE CUSTOM WAHOOUUU... J'espère que vous êtes prêts.");
      setTimeout(() => {
      collector.stop()
      custom()
      }, 5000)
    }
    if (reaction.emoji.name == "🅱️") {
     message.channel.send("Début du mode a la demande, chargement des decks... ");
     deckInit()
    }
  });

})
  }

  function deckInit() {
    var decks = JSON.parse(fs.readFileSync("./decks.json", "utf8"));
    let k = getArr(decks);
    var em = new Discord.MessageEmbed()
      .setTitle("Choisis ton deck.")
      .setDescription(k.join(","))
      .setFooter("");
    message.channel.send(em).then((sentMessage) => {
    let collector = new Discord.MessageCollector(message.channel, m => !m.author.bot && k.includes(m.content) && m.author.id == message.author.id, { time: 600000 });
	  collector.on('collect', m => {
      sentMessage.delete();
      message.channel.send("Lancement avec le deck " + m.content + ". " + decks[m.content].description);
      deck = decks[m.content]
      botChoice()
    })
    })
  }
  function botChoice() {
    let keys = getArr(maped)
    let modes = ["action", "vérité"]
    var executer,
        execution,
        mode;
    mode = modes[getRandomInt(0, modes.length)]
    executer = keys[getRandomInt(0, keys.length)];
    if (mode == "action") execution = deck.action[getRandomInt(0, deck.action.length)]
    else execution = deck.truth[getRandomInt(0, deck.truth.length)]
    message.channel.send("Qui effectue cette " + mode + "? Boh je pense qu'on va partir sur " + `${client.users.get(executer)}`);
    actEmbed("bot", mode, ["tom le boss",executer], execution)
  }

  function custom() {
    let keys = getArr(maped)
    console.log(keys)
    var executer,
        master,
        mode;
    message.channel.send("Le soumis sera...")

    setTimeout(() => {
      executer = keys[getRandomInt(0, keys.length)];
      keys.splice(keys.indexOf(executer), 1)
      console.log(keys)
      message.channel.send(`<@${executer}> !! (mdr boloss)`)
      message.channel.send("Et le maître sera...")
    }, 2000);

    setTimeout(() => {
      master = keys[getRandomInt(0, keys.length)]
      message.channel.send(`<@${master}> !! (mdr bg)`)
      keys.splice(keys.indexOf(master), 1)
    }, 4000);

    setTimeout(() => {
      message.channel.send("**ACTION!! 💥 ou vérité..? 🔮**").then((Mess) => {
        Mess.react("💥");
        Mess.react("🔮");
        var filter = (reaction, user) => {
	      return ["💥","🔮"].includes(reaction.emoji.name) && user.id == executer && !user.bot;
        };
        let collector = Mess.createReactionCollector(filter, { time: 900000 });
        collector.on('collect', (reaction, reactionCollector) => {
          if (reaction.emoji.name == "💥") {
            message.channel.send("Je vois... tu veux faire une action... Je laisse au maître une minute de reflexion pour choisir laquelle.")
            mode = "action"
          } else if (reaction.emoji.name == "🔮") {
            message.channel.send("Ah... tu veux révéler une vérité sur toi... Je laisse au maître une minute de reflexion pour choisir laquelle.")
            mode = "vérité"
          }
          setTimeout(() => {
          collector.stop()
          }, 3000)
        })

    collector.on('end', function() {
    var filter = m => m.author.id == master && !m.author.bot
    message.channel.send(`<@${master}> à toi de choisir cette ${mode}.`).then(() => {
	    message.channel.awaitMessages(filter, { maxMatches: 1, time: 900000, errors: ['time'] })
		.then(collected => {
			message.channel.send(`${collected.first().author} t'as demandé de faire ${collected.first().content}`);
      actEmbed("custom", mode, [master, executer], collected.first().content)
		})
		.catch(collected => {
			message.channel.send('Encore une erreur? C\'est chaud bg...');
		});
});
    });
    })
    }, 5000)
  }

  function actEmbed(game, mode, [master, executer], execution) {
    var e = new Discord.MessageEmbed()
      .setTitle("Temps de réaliser notre " + mode + " !")
      .setDescription(execution)
      .setColor("#ff8bec")

    if (game == "custom") {
      e.setFooter("Le soumis l'a t-il réalisé ? Confirmez-le avec une réaction ");
      message.channel.send(e).then(async (sentMessage) => {
        await sentMessage.react("✅");
        await sentMessage.react("❌");
        var filter = (reaction, user) => {
	        return ["✅","❌"].includes(reaction.emoji.name) && user.id == master && !user.bot;
        };
        let collector = sentMessage.createReactionCollector(filter, { time: 700000 });
        collector.on('collect', (reaction, reactionCollector) => {
          if (reaction.emoji.name == "✅") {
            message.channel.send("Bien joué bg, allez, on recommence.");
            custom();
          } else {
            message.channel.send("ptn quelle merde.")
            custom();
                 }
        })
      });
    } else
   if (game == "bot") {
     e.setFooter("Le soumis l'a t-il réalisé ? Le host doit confirmer.")
      message.channel.send(e).then(async (sentMessage) => {
        await sentMessage.react("✅");
        await sentMessage.react("❌");
        var filter = (reaction, user) => {
	        return ["✅","❌"].includes(reaction.emoji.name) && user.id == message.author.id && !user.bot;
        };
        let collector = sentMessage.createReactionCollector(filter, { time: 700000 });
        collector.on('collect', (reaction, reactionCollector) => {
          if (reaction.emoji.name == "✅") {
            message.channel.send("Bien joué bg, allez, on recommence.");
            botChoice();
          } else {
            message.channel.send("ptn quelle merde.")
            botChoice();
          }
        })
      });
   }
  }
}
