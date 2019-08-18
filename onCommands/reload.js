const settings = require("../settings.json");

exports.conf = {
  aliases: [],
  permLevel: 9
};

exports.help = {
  name: 'reload',
  description: 'Reload a command file.',
  usage: 'reload <commandname>'
};


exports.run = function(bot, msg, args,req) {
    try {
        let command;
        if (bot.commands.has(args[0])) {
            command = args[0];
        } else if (bot.aliases.has(args[0])) {
            command = bot.aliases.get(args[0]);
        }
    
        if (!args[0]) return bot.sendMessage(msg, {
            title: "No argument detected",
            description: "Specify a command to reload with the command.",
          })
          
        if (!command) {
            return bot.sendMessage(msg, {
                title: "Invalid reload request",
                description: `Couldn't find command by name of: ${args[0]}`,
              })
        
        } else {
            bot.sendMessage(msg, {
                title: "Reloading",
                description: "Preparing to reload specified command",
              }).then(m => {
              bot.reload(command).then(() => {
                  m.delete()
                  bot.sendMessage(msg, {
                    title: "Complete",
                    description: "specified command reloaded",
                  })
                }).catch(e => {
                    m.delete()
                    bot.sendMessage(msg, {
                        title: "Command reload failed",
                        description: `Command reload failed: ${command}\n\`\`\`${e.stack}\`\`\``,
                      })
                });
          });
        }
    } catch(error) {
        bot.sendMessage(msg, {
            title: "Error",
            description: `\`\`\`${error}\`\`\``,
          })
    }
};
