exports.run = async (client, message, args) => {
    const Discord = require('discord.js')
    var embed = new Discord.MessageEmbed()
    .setColor('#FFFFFF')
    .setDescription('Test');
  
  message.channel.send(embed)
    .then(m => {
      m.react('➡️');
  
      const filter = (reaction, user) => reaction.emoji.name === '➡️' && user.id === message.author.id;
      const collector = m.createReactionCollector(filter, { max: 1, time: 5 * 60 * 1000 }); // 5 min
  
      collector.on('collect', () => {
       
  
        var embed = new Discord.MessageEmbed()
          .setColor('#007FFF')
          .setDescription('Test #2');
  
        m.edit(embed);
      });
  })
    .catch(err => console.error(err));
}
