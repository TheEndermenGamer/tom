const ytdl = require("ytdl-core");
const Discord = require("discord.js");
const queue = new Map();

exports.run = async(client, message, args) => {
  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
    title: songInfo.title,
    url: songInfo.video_url,
  };
  var voiceChannel = message.member.voiceChannel;
  
  if(!voiceChannel) return message.channel.send("Tu dois être dans un salon vocal pour que je puisse rejoindre")
  if (!voiceChannel.joinable) return message.channel.send("Impossible de rejoindre le salon");
  
  message.react("▶")
  const streamOptions = { seek: 0, volume: 0.5 };
  
  voiceChannel.join().then(connection => {
    const stream = ytdl(args[0], { filter: 'audioonly' });
      const dispatcher = connection.playStream(stream, streamOptions)
      
                  dispatcher.on("end", end => {
                voiceChannel.leave();
                message.channel.send("Fin de la queue, déconnexion.")
            });})
    }

/*



*/