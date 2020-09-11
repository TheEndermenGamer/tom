exports.run = async(client, message, args) => {
    const Jimp = require("jimp");

  var url;
  url = args[0]
  if (message.attachments.size > 0 && message.attachments.first().width) url = message.attachments.first().url

  if (!url) return message.channel.send("wola faut mettre une image stp jpeux pas contraster lvide enculé");
  
    Jimp.read(url, (err, bb) => {
        if (err) throw err;
        bb
          .resize(512, 512)
          .quality(5)
          .contrast(0.75)
          .write('contrasted.png')
      });
  
        setTimeout(function() {
             message.channel.send(``, { files: ["contrasted.png"] })
        }, 3000); 
   
}
