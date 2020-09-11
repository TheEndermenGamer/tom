exports.run = async (client, message, args) => {
  if (!args[0])
    return message.channel.send(
      ":x: Tu dois entrer quelque chose à chercher sur Google."
    );
  message.channel.send(
    "https://www.google.com/search?q=" + args.join(" ").replaceAll(" ", "+")
  );
};
