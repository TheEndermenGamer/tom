
exports.run = async (client, message, args) => {
        let random = Math.floor((Math.random() * args[0]) + 1);
        message.channel.send(random + " :game_die:")
    }