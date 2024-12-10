require('dotenv').config();
import { IncomingMessage, ServerResponse } from 'http';
import { Bot } from "grammy";


module.exports = async (request:IncomingMessage, response:ServerResponse) => {
  const bot = new Bot(`${process.env.TELEGRAM_BOT_TOKEN}`);

  bot.on("message:text", (ctx) => ctx.reply("Echo: " + ctx.message.text));
  
  bot.start();
  
}