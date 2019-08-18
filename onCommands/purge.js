exports.help = {
    name: 'purge',
    description: 'Purge a mass ammount of messages',
    usage: 'purge'
  },

  exports.conf = {
    aliases: [],
    permLevel: 3
  },

  exports.run = function(bot, msg, args, req) {
	if (isNaN(args[0])) return msg.reply("Please specify a valid amount of messages to purge");
	if (args[0] > 1000) return msg.channel.send("Please specify a number less than 1000");
	msg.channel.bulkDelete(args[0])
	.then( messages => msg.channel.send(`Successfully purged ${messages.size} messages`))
	.then(g => setTimeout(() => g.delete(), 1000))
    };
