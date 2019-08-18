const settings = require('../settings.json');
const axios = require('axios');


function makekey() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 50; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
  

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
let generatedkey = "AEO_" + makekey();

console.log(generatedkey);

axios.get("blablabla.000webhostapp.com/Aeonian/789YFHWFJIHSDUIOHJDFSIOJIAHJFKOSDJ/addregkeyfasjfhjashf.php?key2add=" + generatedkey + "&discid=" + whitelistuserid, { responseType: 'text' })
.then(response => {
    let responsetxt = response.data;

    console.log(responsetxt);

    console.log("Whitelist request made by: " + msg.author.username + " for user: " + whitelistuser.username + " and key was: " + responsetxt);

    if(responsetxt == "Err"){
        bot.sendMessage(msg, {
            title: "Whitelist Error!",
            description: `The whitelist request failed!`,
        })
        return;
    }

    else{
        console.log(responsetxt);

        bot.sendMessage(msg, {
            title: "Whitelist Success!",
            description: `The whitelist request succeeded!`,
        });

        whitelistuser.send({embed: {
            color: 3447003,
            author: {
              name: bot.user.username,
              icon_url: bot.user.avatarURL
            },
            title: "Aeonian Whitelist",
            description: "You have been whitelisted on Aeonian!",
          }
        });

        whitelistuser.send({embed: {
            color: 3447003,
            author: {
              name: bot.user.username,
              icon_url: bot.user.avatarURL
            },
            title: "Aeonian Whitelist",
            description: "Your key is: " + responsetxt + " do not lose it!",
          }
        });

        whitelistuser.send({embed: {
            color: 3447003,
            author: {
              name: bot.user.username,
              icon_url: bot.user.avatarURL
            },
            title: "Aeonian Whitelist",
            description: "Enter your key at https://blablabla.000webhostapp.com/Aeonian to create your account!",
          }
        });

        return;
    }


  })
  .catch(error => {
    console.log(error);
    bot.sendMessage(msg, {
        title: "Whitelist Error!",
        description: `The whitelist request failed!`,
    })
    return;
  });

}

exports.conf = {
    aliases: [],
    permLevel: 9
  };
  
  exports.help = {
    name: 'whitelist',
    description: 'Adds someone to the Aeonian database so they can use the exploit!',
    usage: 'whitelist <user#0000>'
  };