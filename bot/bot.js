const TelegramBot = require('node-telegram-bot-api');

const token = '7243791397:AAE808kmX5DTkIciUbRaSNhw3-d9tVCN5Y8';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});


// Matches "/start"
bot.onText(/\/start/, (msg,) => {
  // 'msg' is the received Message from Telegram
  const chatId = msg.chat.id;
  //const resp = 'Welcome to Cricket Legends! Click the link to access the web app: http://localhost:3000';
  const url='http://localhost:3000';
  bot.sendMessage(chatId, `Welcome! Click here to access our web app: ${url}`);


  // bot.sendMessage(chatId, resp,{
  //   reply_markup:{
  //     inline_keyboard:[
  //       [{text:'Vist the given url', url:'http://localhost:4001'}]
  //     ]
  //   }
  // });
});
// app.listen(4001, () => {
//   console.log(`Server is running on port 4001`);
// });
// bot.on('message', (msg) => {

//   const chatId = msg.chat.id;

//   bot.sendMessage(chatId, 'Received your message');
// });
console.log('bot is running');