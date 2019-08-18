const settings = require('../settings.json');
const axios = require('axios');




exports.run = (bot, msg, args) => {
    let whitelistuser = msg.mentions.users.first();

    if(!msg.mentions.users.first()){
        bot.sendMessage(msg, {
            title: "Invalid Arguments",
            description: `please tag a user!`,
        });
        return;
    }
    
    let whitelistuserid = msg.mentions.users.first().id;
axios.get("https://blablabla.000webhostapp.com/Aeonian/789YFHWFJIHSDUIOHJDFSIOJIAHJFKOSDJ/checkifwlestdfgjfask.php?discid=" + whitelistuserid, { responseType: 'text' })
.then(response => {
    let responsetxt = response.data;

    var blcheck = responsetxt.split("|");

    if(blcheck[0] == "BL"){
        bot.sendMessage(msg, {
            title: "Error!",
            description: `this account has been blacklisted for the reason: ` + blcheck[1],
        })
        return;
    }

    console.log(responsetxt);

    if(responsetxt == "N"){
        bot.sendMessage(msg, {
            title: "Error!",
            description: `You are not in the database!`,
        })
        return;
    }

    else if (responsetxt == "Y"){
        console.log(responsetxt);
        bot.sendMessage(msg, {
            title: "Success!",
            description: `You are in the database!`,
        });
        return;
    }


  })
  .catch(error => {
    console.log(error);
    bot.sendMessage(msg, {
        title: "Error!",
        description: `The request failed! Try again later!`,
    })
    return;
  });


}

exports.conf = {
    aliases: [],
    permLevel: 1
  };
  
exports.help = {
    name: 'check',
    description: 'checks if you have a whitelist',
    usage: 'check @user#0000'
};