const settings = require('../settings.json');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function removeSpecials(str) {
  var lower = str.toLowerCase();
  var upper = str.toUpperCase();

  var res = "";
  for(var i=0; i<lower.length; ++i) {
      if(lower[i] != upper[i] || lower[i].trim() === '')
          res += str[i];
  }
  return res;
}

function httpGet(theUrl,t)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, t );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function httpPost(theUrl,data)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", theUrl, true );
    xmlHttp.send(data);
    return xmlHttp.responseText;
}

const Req = {
  "fs" : require('fs'),
  "httpPost" : httpPost,
  "httpGet" : httpGet,
  "ms" : require("ms"),
  "removeSpecials" : removeSpecials,
  "CloneCreate" : require("../onClone/Creator.js"),
  "CloneSerial" : require("../onClone/Serialize.js"),
  };
module.exports = msg => {
  let bot = msg.client;
  if(msg.author.bot) return;
  if(msg.channel.type !== "text") return;
  if (!msg.content.startsWith(settings.prefix)) return;
  let command = msg.content.toLowerCase().split(' ')[0].slice(settings.prefix.length);
  let args = msg.content.split(' ').slice(1);
  let perms = bot.elevation(msg);

  let cmd;
  if (bot.commands.has(command)) {
    cmd = bot.commands.get(command);
  } else if (bot.aliases.has(command)) {
    cmd = bot.commands.get(bot.aliases.get(command));
  }
  if (cmd) {
    console.log(perms, cmd.conf.permLevel)
    if (perms >= cmd.conf.permLevel) {
      try {cmd.run(bot, msg, args, Req)}catch(e){console.log(e)}
      console.log("A")
    } else {
      msg.channel.send(msg.author, {embed: {
        color: 0x00000ff,
        title: `Invalid Rank`,
        description: `Your Rank (${perms}) is too low for this command (${cmd.conf.permLevel})`,
      }});
    };

    //cmd.run(bot, msg, args, Req)
  }

};