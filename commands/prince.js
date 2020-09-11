exports.run = async(client, message, args) => {
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: args[0] };
        var voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection => {
          message.react("🕌")
        const stream = ytdl('https://www.youtube.com/watch?v=4B1ZXz70sCA', { filter: 'audioonly' });
            const dispatcher = connection.play(stream, streamOptions)
    setTimeout(function() {
      voiceChannel.leave()
        }, 212400)
  });}