function random(max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

exports.run = async(client, message, args) => {
        var chance = random(0, 5)
        if (chance < 1) {
            message.channel.send(":gun::boom:   " + message.author + " t mort mdrr ")
        } else {
            message.channel.send(":gun::mute:   " + message.author + " c bon t vivant va faire de la trottinette :scooter:")
        }
}
