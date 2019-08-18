exports.run = function(bot, msg, args, req) {

    var mentionedMember = msg.mentions.members.first();
    if (!mentionedMember) return bot.sendMessage(msg,{
      title : "Invalid user mention:",
      description : "Please mention a user to kick."
    });
    
    var userObject = msg.mentions.users.first();
    var specifiedReason = args.slice(1).join(" ");
    if (!specifiedReason) return bot.sendMessage(msg,{
      title : "Invalid kick attempt:",
      description : "Please provide a reason for the kick."
    });
  
    var activatorRole = msg.member.highestRole.position;
    var targetRole = mentionedMember.highestRole.position;
    var clientRole = msg.guild.fetchMember(bot.user).then(m => m.highestRole.position);
    
    if (activatorRole <= targetRole) return bot.sendMessage(msg,{
      title : "Invalid kick attempt:",
      description : "Your dominant role is lower then your targets dominant role, they have more power then you."
    });
    
    if (clientRole <= targetRole) return bot.sendMessage(msg,{
      title : "Invalid kick attempt:",
      description : "Your dominant role is lower then your targets dominant role, they have more power then me."
    });
  
  
    msg.guild.fetchMember(userObject).then(m => m.kick(`${specifiedReason} - This kick was performed by staff member: ${msg.author.tag}`));
    bot.sendMessage(msg,{
      title : "Successfully kicked user:",
      description : `Staff: ${msg.author.tag} \nReason: ${specifiedReason}`
    });
  
  };
  
  exports.conf = {
      aliases: [],
      permLevel: 4
    };
    
    exports.help = {
      name: 'kick',
      description: 'Kicks mentioned user with a reason.',
      usage: 'kick <mention> <reason>'
    };