const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers.`);
});

bot.on('message', (message) => {
    if (message.content == 'ping'){
        message.reply('pong');
    }
})

bot.on('message', (message) => {
    if (message.content == 'github'){
        message.reply('Initialized');
    }
})

bot.on('message', (message) => {
    if (message.content == 'ziema'){
        message.reply('бля холодно пиздец!');
    }
})

bot.login(process.env.BOT_TOKEN);
