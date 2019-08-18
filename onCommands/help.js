const settings = require('../settings.json');
exports.run = (bot, msg, args) => {
  if (!args[0]) {
    const commandNames = Array.from(bot.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    bot.sendMessage(msg, {
      //userSend: msg.member.id,
      title: "Commands List",
      description: `Use ${settings.prefix}help <command> for information!\n\n${bot.commands.map(c => `${settings.prefix}${c.help.name}${''.repeat(longest - c.help.name.length)}`).join('\n')}`,
    })
  } else {
    let command = args[0];
    if (bot.commands.has(command)) {
      command = bot.commands.get(command);
      bot.sendMessage(msg, {
        //userSend: msg.member.id,
        title: "Commands Help",
        description: `Command Name: \`${command.help.name}\` \nDescription: ${command.help.description}\nRequired Permission Level: ${command.conf.permLevel}\nUsage: ${settings.prefix}${command.help.usage}\nAliases: ${command.conf.aliases.join(" | ")}`,
      })
    } else {
      bot.sendMessage(msg, {
        //userSend: msg.member.id,
        title: `Non-Existant Command!`,
        description: `I was unable to find a command by the name of \`${args[0]}\``,
      })
    }
  }
};

exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays available commands.',
  usage: 'help <command>'
};