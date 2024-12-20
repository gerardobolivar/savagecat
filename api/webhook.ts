require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
process.env.NTBA_FIX_319 = 'test';


module.exports = async (request:any, response:any) => {
  try {
    const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);

    const { body } = request;

    if (body.message) {
        const { chat: { id }, text } = body.message;
        const message = `✅ Thanks for your message: *"${text}"*\nHave a great day! 👋🏻`;

        await bot.sendMessage(id, message, {parse_mode: 'Markdown'});
    }
}
catch(error) {
    console.error('Error sending message');
    console.log(error);
}

response.send('OK');
  
}