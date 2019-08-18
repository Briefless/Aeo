exports.help = {
    name: 'membercount',
    description: 'Check how many members your server has',
    usage: 'membercount'
  },

  exports.conf = {
    aliases: [],
    permLevel: 0
  },

  exports.run = function(bot, msg, args, req) {
    bot.sendMessage(msg, {
    title: " ",
    description: "This server has " + msg.guild.memberCount + " members"})
    };
