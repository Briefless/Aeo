exports.conf = {
    aliases: [],
    permLevel: 5
  };
  
  exports.help = {
    name: 'ban',
    description: 'Bans mentioned user with a reason.',
    usage: 'ban <mention> <reason>'
  };

exports.run = function(bot, msg, args) {

    var mentionedMember = msg.mentions.members.first();
    if (!mentionedMember) return bot.sendMessage(msg,{
      title : "Invalid user mention:",
      description : "Please mention a user to ban."
    });
    var userObject = msg.mentions.users.first();
    var specifiedReason = args.slice(1).join(" ");
    if (!specifiedReason) return bot.sendMessage(msg,{
      title : "Invalid ban attempt:",
      description : "Please provide a reason for the ban."
    });
   
    var activatorRole = msg.member.highestRole.position;
    var targetRole = mentionedMember.highestRole.position;
    var clientRole = msg.guild.fetchMember(bot.user).then(m => m.highestRole.position);
    
    if (activatorRole <= targetRole) return bot.sendMessage(msg,{
      title : "Invalid ban attempt:",
      description : "Your dominant role is lower then your targets dominant role, they have more power than you."
    });

    if (clientRole <= targetRole) return bot.sendMessage(msg,{
      title : "Invalid ban attempt:",
      description : "My dominant role is lower then your targets dominant role, they have more power than me."
    });

    msg.guild.fetchMember(userObject).then(m => m.ban({days: 1, reason: `${specifiedReason} - This ban was performed by staff member: ${msg.author.tag}`}));
    bot.sendMessage(msg,{
      title : "Successfully banned user:",
      description : `Staff: ${msg.author.tag} \nBanned: ${mentionedMember.user.tag} \nReason: ${specifiedReason}`
    });
};
