exports.help = {
    name: 'ping',
    description: 'pong!',
    usage: 'ping'
  },

  exports.conf = {
    aliases: [],
    permLevel: 0
  },

  exports.run = function(bot, msg, args, req) {
    bot.sendMessage(msg, {
    title: " ",
    description: ":heartbeat: Pong! " + bot.ping+"ms"})
    };
