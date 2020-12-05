const Discord = require('discord.js');
const client = new Discord.Client();

const start = {
    token: 'Your-Bot-Token-Here'
};

client.once('ready', () => {
	console.log('--------------');
  console.log('Discord.JS Bot Example')
  console.log('Coded with <3 by Saqib')
  console.log('--------------');
});

client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply(`🏓\`${Date.now() - message.createdTimestamp}\`ms`);
  }
});

client.login(start.token);
