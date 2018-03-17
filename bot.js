const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers.`);
    bot.user.setActivity(`XANAX`);
});

bot.on('message', (message) => {
    msg = message.content.toLowerCase();
    if (message.author.bot) return;

    if(msg.includes('ziema')){
        message.reply('бля холодно пиздец!');
    }
    if(msg.includes('vasara')){
        message.reply('бля холодно пиздец!');
    }
    if(msg.includes('kaifs')){
        message.reply('Мне по кайфу, когда порнуха в телеке, когда проститутка в "гелике".');
    }
    if(msg.includes('apčī')){
        message.reply('Не чихай, будь здоров! Не забудь сказать А.У.Е. за воров!');
    }
    if(msg.includes('maz')){
        message.reply('В твоей жопе куча мала.');
    }
    if(msg.includes('atceries')){
        message.reply('Помнишь, ебал тебя в бутсах?');
    }
    if(msg.includes('eu')){
        message.reply('Слышь, дядь, вот только без этого, блядь.');
    }
    if(msg.includes('dzirdi')){
        message.reply('Хуй соси!');
    }
    if(msg.includes('notiek')){
        message.reply('Я порвал уздечку в клубе на залупе охранника.');
    }
    if(msg.includes('kāpēc')){
        message.reply('Пойми: тебе не место в стане фристайлеров.');
    }
    if(msg.includes('plāns')){
        message.reply('Копам в жопу нассы!');
    }
    if(msg.includes('uzpīpēt')){
        message.reply('Мои лёгкие чернее, чем твой задний проход.');
    }
    if(msg.includes('hardbass')){
        message.reply('За плечом смерть и коса, в клубах играет "колбаса".');
    }
    if(msg.includes('ahujenna')){
        message.reply('Ахуенно кого-нибудь убить. Просто взять, тупо в голову выстрелить. И похуй что за это могут посадить, просто похуй на все эти мысли');
    }
    if(msg.includes('loliņu')){
        message.reply('ЭТО ВОРОТА АДА ПИЗДЕТЬ УЖЕ НЕ НАДО');
    }
    if(msg.includes('rīt')){
        message.reply('КЕНТЫ ЕДУТ НА ХАТУ К ТЕХНИКУ ПОД СОЛИ И МИКСЫ А ТЫ И ДАЛЬШЕ ХУЙ СОСИ');
    }
    if(msg.includes('Imants')){
        message.reply('ГОНДОН ТЫ ЗЛОЕБУЧИЙ');
    }
    if(msg.includes('darām')){
        message.reply('Меня от соли накрыло!');
    }
    if(msg.includes('sīdžu')){
        message.reply('Жгучая хуйня');
    }
    if(msg.includes('ticu')){
        message.reply('https://imgur.com/a/JH1if');
    }
    if(msg.includes('viktors')){
    message.reply('https://i.imgur.com/dzAZOXv.png');
    }
})

bot.login(process.env.BOT_TOKEN);
