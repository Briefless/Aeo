exports.help = {
    name: 'info',
    description: 'Gives some infomation about the bot.',
    usage: 'info'
  },

  exports.conf = {
    aliases: [],
    permLevel: 0
  },

  exports.run = function(bot, msg, args, req) {
    bot.sendMessage(msg, {
    title: " ",
    description: 
    "Creators: Tee made for Aeonian \r\nBot Version: 3.0.1 \r\nNode Verson: v8.11.3"
    })
};
