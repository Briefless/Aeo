module.exports = bot => {
    console.log("Starting...")
      bot.user.setActivity("Loading...")
      bot.user.setActivity('Getting Ready For Release || ;help')
      console.log(`Logged in as ${bot.user.username}!`); 
  };