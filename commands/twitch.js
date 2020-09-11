exports.run = async(client, message, args) => {
const tmi = require('tmi.js');

const clientt = new tmi.Client({
	connection: {
		secure: true,
		reconnect: true
	},
	channels: [ 'TWITCH CHANNEL NAME' ]
});

clientt.connect();

clientt.on('message', (channel, tags, message, self) => {

  const channell = client.channels.cache.get('CHANNEL ID');

	//client.channels.cache.get("721016745867083846").send(`${tags['display-name']}: ${message}`);

  channell.createWebhook(`${tags['display-name']}`, { avatar: 'https://cdn.glitch.com/56bf1a52-9521-498e-8475-1a4cd0a9cc42%2Fprout.png?v=1592402013334' }).then(async webhook => {
      await webhook.send(`${message}`)

        setTimeout(function() {
      webhook.delete()
     }, 500)
    })
});
}

/*
channel.createWebhook(nom, { avatar: url }).then(async webhook => {
      await webhook.send("MP (" + message.author.id + ") : ")
      webhook.delete()
    })
*/
