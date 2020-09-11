exports.run = async (client, message, args) => {
          let random = Math.floor((Math.random() * 312543) + 1);
  if (!args[0]) {
        message.channel.send("https://nhentai.net/g/" + random)
        console.log("miam request : " + random + " par " + message.author)
    }
  else {
  message.channel.send("https://www.nhentai.net/search/?q=" + args.join(" ").replaceAll(" ", "+"))
  }
}