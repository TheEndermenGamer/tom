exports.run = async (client, message, args) => {
  if (!args[0])
    return message.channel.send(":x: Tu dois entrer quelque chose à chercher sur Wikipedia.");
  message.channel.send("https://fr.wikipedia.org/wiki/" + args.join(" ").replaceAll(" ", "_"));
};
