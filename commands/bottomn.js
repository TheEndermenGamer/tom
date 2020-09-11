exports.run = async(client, message, args) => {
    const Jimp = require("jimp");
/*
  var url;
  url = args[0]
  if (message.attachments.size > 0 && message.attachments.first().width) url = message.attachments.first().url

  if (!url) return message.channel.send("faut mettre une image stp jpeux pas faire des trucs lvide enculé");
  */
var fileName = 'contrasted.png';
var imageCaption = args.join(" ");
var loadedImage;

Jimp.read(fileName)
    .then(function (image) {
        loadedImage = image;
        return Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    })
    .then(function (font) {
        loadedImage.print(font, 20, 20, imageCaption)
                   .write('output.png');
    })
    .catch(function (err) {
        console.error(err);
    });
  
        setTimeout(function() {
             message.channel.send(``, { files: ["output.png"] })
        }, 3000); 
    }