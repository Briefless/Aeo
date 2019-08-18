exports.help = {
    name: 'permlevel',
    description: 'shows you your permission level!',
    usage: 'permlevel'
  },

  exports.conf = {
    aliases: [],
    permLevel: 0
  },

  exports.run = function(bot, msg, args, req) {
    let perms = bot.elevation(msg);
    msg.channel.send(msg.author, {embed: {
    color: 0x00000ff,
    title: `Permission Level`,
    description: `Your Permission Level is: (${perms}) `,
  }});
    };



