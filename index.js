const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const ytdl = require('ytdl-core');
// const clientt = require("nekos.life");
//const neko = new clientt();
const https = require("https")
require(__dirname + "/app/keepAlive.js");

client.on("ready", () => {
  client.user.setActivity("la paire de tn fréro", { type: "WATCHING" });
});


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


//mets un rôle défini quand quelqu'un rejoins un channel (pas sûr que ça marche mais bon)
  client.on("guildMemberAdd", guildMember => {
    guildMember.addRole(
      guildMember.guild.roles.find(role => role.name === "ROLE NAME")
    );
  });

// Sons custom quand une certaine personne join un vocal

  client.on('voiceStateUpdate', (oldState, newState) => {
    if (newState.id == "USER ID") {
      if (!newState.channel) return;
if (newState.selfMute) return;
      var voiceChannel = newState.channel
      voiceChannel.join().then(connection => {
        var streamOptions = { seek: 0, volume: 0.5 };
  const stream = ytdl('YT LINK', { filter: 'audioonly' });
      const dispatcher = connection.play(stream, streamOptions)
setTimeout(function() {
voiceChannel.leave()
  }, 4000)
});
    }
    });


client.on("message", (message) => {
  if(message.author.bot) return;
  if(message.channel.type == "dm" && message.content.startsWith("&")) return message.reply('jmarche pas en dm gros');
// envoie le dm dans le channel spécifié
  else if (message.channel.type == "dm") {
    client.channels.get("CHANNEL ID").createWebhook(message.author.username, message.author.avatarURL).then(webhook => {
      webhook.send(message.content)
      webhook.delete()
    })
    }
  })

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, "g"), replacement);
};
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

fs.readdir("./events/", (err, files) => {
  if (err) console.log(err);
  files.forEach(file => {
    let eventFunc = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunc.run(client, ...args));
  });
});

client.on("ready", () => {
  console.log("pret oue")
});
client.login("TOKEN");
