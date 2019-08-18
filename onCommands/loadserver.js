
exports.help = {
    name: 'loadserver',
    description: 'loads a JSON file into a server',
    usage: 'loadserver <serverID>'
  },

  exports.conf = {
    aliases: [],
    permLevel: 0
  },

  exports.run = function(bot, msg, args, req) {
      if (args[0]) {
          req.CloneCreate.beginProcess(msg.guild,args[0]);
        } else return bot.sendMessage(msg, {
          title: "Invalid Argument!",
            description: "You MUST include a guildid at the end",
        })
  }
