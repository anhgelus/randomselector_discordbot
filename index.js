Bot.on('message', message => {
if(message.content === "!roll"){
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    var nbrRandom = getRandomInt(%max numbers%);
    if(nbrRandom == %replace%){
        message.reply("Test 1")
    } else {
        message.reply("Test 2")
    }
}
})
