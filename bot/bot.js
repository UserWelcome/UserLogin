const TelegramBot = require('node-telegram-bot-api');


// Your bot token from BotFather
const token = 'yourtoken';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});


// handle  "/start"
bot.onText(/\/start/,  (msg,) => {
  // 'msg' is the received Message from Telegram
  const chatId = msg.chat.id;
  //const resp = 'Welcome to Cricket Legends! Click the link to access the web app: http://localhost:3000';
  const title = "Welcome";
  const description = "This is a fun and exciting game.";
  const url='http://localhost:3000';
  bot.sendMessage(chatId, `Welcome! Click here to access our web app: ${url}`);

  const messageOptions = {
    reply_markup: {
      inline_keyboard: [[{ text: "Play Game", web_app: { url: url } }]],
    },
  };
  bot.sendMessage(
    messageOptions
  );
  // bot.sendMessage(chatId, resp,{
  //   reply_markup:{
  //     inline_keyboard:[
  //       [{text:'Vist the given url', url:'http://localhost:4001'}]
  //     ]
  //   }
  // });
});

bot.on('message', (msg) => {

  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Welcome to cricket');
});
console.log('bot is running');
