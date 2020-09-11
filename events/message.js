exports.run = async(client, message, args) => {
let prefix = "&";

function random(max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const ytdl = require('ytdl-core');


exports.run = async (client, message) => {
    let em = ["😀", "😐", "😂", "🥰", "⁉", "🤡", "😳", "🙏", "❤", "🤪", "😡", "🤔", "🐷", "😔", "‼", "🤝", "😤", "☠", "🕋", "😋", "😏", "🙄", "😴", "😱", "🥵", "🤢", "💩", "🦧", "🧠", "😎", "😒", "🥶", "🐸", "🥳", "😭", "🥱", "🐵", "🌮", "🛴", "💥", "💤", "🔇", "😑", "😶", "🐀", "🌊", "✌", "🥳", "❓"]
    if (random(0, 10) == 1) {
    message.react(em[random(0, em.length)]);
    }
    if (message.attachments.size > 0 && message.attachments.first().width && message.channel.id == "ID") {
    message.delete()
    message.author.send("c'est pas très 🇸 🇪 🇽 d'envoyer des images ici, vrai gamer évite ça")
  }
  if (message.content.startsWith(prefix)) {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if (!commandfile) return;
    commandfile.run(client, message, args);
  };


  if (message.content.toLowerCase().endsWith("pute")) {
    message.channel.send("t'as envie de te battre en fait");
  }

  if (message.content.toLowerCase().endsWith("fdp")) {
    message.channel.send("miroir");
  }

  if (message.content.toLowerCase().endsWith("je t'aime tom")) {
    if message.author.id("470470104467898378") return message.channel.send("jtm ❤");
    message.channel.send("tout le monde m'aime :sunglasses:");
  }

  if (message.content.toLowerCase().endsWith("vol")) {

  }

  if (message.content.toLowerCase().endsWith("salope")) {
    message.channel.send("fais pas lfou jvais tbalayer");
  }

  if (message.content.toLowerCase().endsWith("viens")) {

        var voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection => {
              var streamOptions = { seek: 0, volume: 0.5 };
          message.react("🏃‍♀️")
        const stream = ytdl('https://www.youtube.com/watch?v=HxkmXnRQblE', { filter: 'audioonly' });
            const dispatcher = connection.play(stream, streamOptions)
    setTimeout(function() {
      voiceChannel.leave()
        }, 38000)
  });}



  if (message.content.toLowerCase().endsWith("le prince")) {
        const streamOptions = { seek: 0, volume: 0.5 };
        var voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection => {
          message.react("🕌")
        const stream = ytdl('https://www.youtube.com/watch?v=4B1ZXz70sCA', { filter: 'audioonly' });
            const dispatcher = connection.play(stream, streamOptions)
    setTimeout(function() {
      voiceChannel.leave()
        }, 212400)
  });}

  if (message.content.toLowerCase().endsWith("guerrier")) {
    const streamOptions = { seek: 0, volume: 0.5 };
    var voiceChannel = message.member.voice.channel;
    voiceChannel.join().then(connection => {
      message.react("⚔")
    const stream = ytdl('https://www.youtube.com/watch?v=8P5WCI0iQlo', { filter: 'audioonly' });
        const dispatcher = connection.play(stream, streamOptions)
});}

if (message.content.toLowerCase().endsWith("battle royale")) {
  const streamOptions = { seek: 0, volume: 0.5 };
  var voiceChannel = message.member.voice.channel;
  voiceChannel.join().then(connection => {
    message.react("💪")
  const stream = ytdl('https://www.youtube.com/watch?v=aaEgiYVEjX4', { filter: 'audioonly' });
      const dispatcher = connection.play(stream, streamOptions)
});}

  if (message.content.toLowerCase().endsWith("fun")) {
    const streamOptions = { seek: 0, volume: 0.5 };
    var voiceChannel = message.member.voice.channel;
    voiceChannel.join().then(connection => {
      message.react("🎺")
    const stream = ytdl('https://www.youtube.com/watch?v=WnRrPqgKBS0', { filter: 'audioonly' });
        const dispatcher = connection.play(stream, streamOptions)
setTimeout(function() {
  voiceChannel.leave()
    }, 1800)
});}


  if (message.content.toLowerCase().endsWith("dégage")) {
    message.react("😔")
      message.member.voice.channel.leave()
  }

  if (message.content.toLowerCase().endsWith("tg")) {
      message.channel.send("ouais ouais allez toi tg rafale tes morts la grr")
      message.member.voice.setMute(true)
  }

  if (message.content.toLowerCase().endsWith("pardon")) {
    message.channel.send("ok ok jtexcuse mais fais pas le narvalo comme ça la ‼")
    message.member.voice.setMute(false)
  }

  let singe = ["👨🏿‍🌾", "🧒🏿", "🙈", "👶🏿", "🦧", "🙉", "🙊", "🐒", "🐵", "🦍"]

  let arabes = ["🕌", "💥", "🕋", "🔫"]

  if (message.content.toLowerCase().endsWith("noir")) {
    message.react(singe[random(0, singe.length)])
  }

  if (message.content.toLowerCase().endsWith("✈️")) {
    message.react("🏢")
  }

    if (message.content.toLowerCase().endsWith("🏢")) {
    message.react("✈️")
  }

  if (message.content.toLowerCase().endsWith("arabe")) {
    message.react(arabes[random(0, arabes.length)])
  }
}
}
