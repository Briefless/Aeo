var nibba =  require('nibba');


exports.help = {
    name: 'nibbaify',
    description: 'Converts normie text to ni🅱️🅱️a text',
    usage: 'nibbaify <text>'
  },

  exports.conf = {
    aliases: [],
    permLevel: 0
  },

  exports.run = function(bot, msg, args){
    var shit2nibbaify = args.slice(0).join(" ");
    bot.sendMessage(msg, {
        title: " ",
        description: `${nibba.convert(shit2nibbaify)}`
    })
  }