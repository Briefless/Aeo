const settings = require('../settings.json');
const axios = require('axios');




exports.run = (bot, msg, args) => {
let whitelistuser = msg.author;


let whitelistuserid = msg.author.id;

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
        let whitelistuser = msg.member;
        const role = msg.guild.roles.find('name', 'Buyers');
        whitelistuser.addRole(role).catch(console.error);
        bot.sendMessage(msg, {
            title: "Buyersrole Success!",
            description: `You have been given the buyers role!`,
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
    name: 'buyersrole',
    description: 'checks if you have a whitelist and if so will give you a role made for buyers of the exploit!',
    usage: 'buyersrole'
};