exports.run = async(client, message, args) => {
let dateCreation = message.member.user.createdAt;
  message.channel.send("Date de création de ton compte : " + dateCreation)
    }
