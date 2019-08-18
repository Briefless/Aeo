const settings = require('../settings.json');
const axios = require('axios');

exports.run = (bot, msg, args) => {
    if((args.slice(0).join(" ") == "")){
        bot.sendMessage(msg, {
            title: "Invalid Arguments",
            description: `please tag a user!`,
        });
        return;
    }

    if((args.slice(1).join(" ") == "")){
        bot.sendMessage(msg, {
            title: "Invalid Arguments",
            description: `please type a reason!`,
        });
        return;
    }

    let usertoblacklist = msg.mentions.users.first();
    let usertoblacklistid = msg.mentions.users.first().id;
    let reason = args.slice(1).join(" ");

    axios.get("https://blablabla.000webhostapp.com/Aeonian/789YFHWFJIHSDUIOHJDFSIOJIAHJFKOSDJ/balekleisiudtaurhfjwehfjha.php?discid=" + usertoblacklistid  + "&reason=" + reason, { responseType: 'text' })
.then(response => {
    let responsetxt = response.data;

    console.log(responsetxt);

    console.log("Blacklist request made by: " + msg.author.username + " for user: " + usertoblacklist.username + " and reason was: " + reason);

    if(responsetxt != "BLS"){
        bot.sendMessage(msg, {
            title: "Blacklist Error!",
            description: `The blacklist request failed!`,
        })
        return;
    }

    else{
        console.log(responsetxt);
        bot.sendMessage(msg, {
            title: "Blacklist Success!",
            description: `${usertoblacklist.username} was blacklisted for the reason: ${reason}!`,
        })
        return;
    }

  })
  .catch(error => {
    console.log(error);
    bot.sendMessage(msg, {
        title: "Blacklist Error!",
        description: `The blacklist request failed!`,
    })
    return;
  });

}


exports.conf = {
    aliases: [],
    permLevel: 9
  };
  
  exports.help = {
    name: 'blacklist',
    description: 'revokes someones rights to use the exploit',
    usage: 'blacklist <user#0000> <reason>'
  };