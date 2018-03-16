const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers.`);
    bot.user.setActivity(`XANAX`);
});

bot.on('message', (message) => {
    
    if (message.author.bot) return;
    
    msg = message.content.toLowerCase();

    if (msg.includes('github')){
        message.reply('Initialized');
    }
    if (msg.includes(['ziema','vasara'])){
        message.reply('бля холодно пиздец!');
    }
})

bot.login(process.env.BOT_TOKEN);
