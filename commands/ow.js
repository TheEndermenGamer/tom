exports.run = async(client, message, args) => {
const owjs = require('overwatch-js');
const Discord = require('discord.js');

owjs
            .search(args.join(""))
            .then((data) => {
                var dat = data[0]
                var owstats = new Discord.MessageEmbed()
                    .setTitle("OVERWATCH")
                    .setDescription("Statistiques de **" + dat.name + "**")
                    .addField("Plateforme", ":joystick: " + dat.platform.toUpperCase(), true)
                    .addField("Niveau", ":arrow_up: " + dat.level, true)
                    .setColor("ff8bec")
                    .setThumbnail(`https://blzgdapipro-a.akamaihd.net/game/unlocks/${dat.portrait}.png`)
                    console.log(dat.level)
                    message.channel.send(owstats)
            }); 
  
}