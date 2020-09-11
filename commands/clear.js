exports.run = async (client, message, args) => {
  if (isNaN(args[0]))
    return message.channel.send(
      ":x: Merci de spécifier un nombre de messages à supprimer."
    );
  if (args[0] > 100)
    return message.channel.send(
      ":x: Merci de mettre un nombre inférieur à 100."
    );
 if (!message.member.hasPermission("MANAGE_MESSAGES"))
   return message.channel.send(
     ":x: Tu n'as pas la permission d'effectuer cette commande."
    );
    message.delete();
    setTimeout(function() {
      message.channel.bulkDelete(args[0]).then(() => {
        message.channel
          .send(`${args[0]} messages ont été supprimés.`)
          .then(msg => msg.delete({ timeout:2000 }));
      });
    }, 50);
};

