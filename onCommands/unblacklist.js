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

    let usertoblacklist = msg.mentions.users.first();
    let usertoblacklistid = msg.mentions.users.first().id;

    axios.get("https://blablabla.000webhostapp.com/Aeonian/789YFHWFJIHSDUIOHJDFSIOJIAHJFKOSDJ/balekleisiudtaurhfjwehfjha.php?discid=" + usertoblacklistid  + "&reason=" + "", { responseType: 'text' })
.then(response => {
    let responsetxt = response.data;

    console.log(responsetxt);

    console.log("UnBlacklist request made by: " + msg.author.username + " for user: " + usertoblacklist.username);

    if(responsetxt != "BLS"){
        bot.sendMessage(msg, {
            title: "Unblacklist Error!",
            description: `The Unblacklist request failed!`,
        })
        return;
    }

    else{
        console.log(responsetxt);
        bot.sendMessage(msg, {
            title: "Unblacklist Success!",
            description: `${usertoblacklist.username} was Unblacklisted!`,
        })
        return;
    }

  })
  .catch(error => {
    console.log(error);
    bot.sendMessage(msg, {
        title: "Unblacklist Error!",
        description: `The Unblacklist request failed!`,
    })
    return;
  });

}


exports.conf = {
    aliases: [],
    permLevel: 9
  };
  
  exports.help = {
    name: 'unblacklist',
    description: 'revokes someones blacklist so they can use the exploit again!',
    usage: 'unblacklist <user#0000>'
  };