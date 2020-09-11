

exports.run = async(client, message, args) => {
    var time = new Date().toLocaleString("fr-FR", {timeZone: "Europe/Paris"});
      time = new Date(time);
    console.log(time.toLocaleString())
    message.channel.send("tiens bg : " + time)
  }
