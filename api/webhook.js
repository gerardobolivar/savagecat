process.env.NTBA_FIX_319 = 'test'
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

module.exports = (request, response) => {
  try {
    const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);
    const {body} = request;

    if(body.message){
      const {chat:{id} , text} = body.message;

      const message = `Message received: *"${text}"*\n🤖`
      
    }
  } catch (error) {
    console.error("[SERVER]: There was a error trying to send the message.");
    console.log(error.toString());
    
  }

  response.send("OK");
}