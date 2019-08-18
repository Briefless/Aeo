exports.help = {
    name: 'saveserver',
    description: 'Saves the guild into a JSON file',
    usage: 'saveserver'
  },

  exports.conf = {
    aliases: [],
    permLevel: 10
  },

  exports.run = function(bot, msg, args, req) {
      req.CloneSerial.beginProcess(msg.guild);
      msg.channel.send(msg.author,{embed: {
        color: 0x00000ff,
        author: {},
        title: "Done!",
        timestamp: new Date(),
    },
})
  }

