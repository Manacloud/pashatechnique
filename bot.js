const Discord = require('discord.js');
const bot = new Discord.Client();

Array.prototype.toLowerCase = function() { 
    for (var i = 0; i < this.length; i++) {
        this[i] = this[i].toString().toLowerCase(); 
    }
}


const responseObject = {
    'ziema': 'бля холодно пиздец!',
    'vasara': 'бля холодно пиздец!',
    'kaifs': 'Мне по кайфу, когда порнуха в телеке, когда проститутка в "гелике".',
    'apčī': 'Не чихай, будь здоров! Не забудь сказать А.У.Е. за воров!',
    'maz': 'В твоей жопе куча мала.',
    'atceries': 'Помнишь, ебал тебя в бутсах?',
    'eu': 'Слышь, дядь, вот только без этого, блядь.',
    'dzirdi': 'Хуй соси!',
    'notiek': 'Я порвал уздечку в клубе на залупе охранника.',
    'kāpēc': 'Пойми: тебе не место в стане фристайлеров.',
    'plāns': 'Копам в жопу нассы!',
    'uzpīpēt': 'Мои лёгкие чернее, чем твой задний проход.',
    'hardbass': 'За плечом смерть и коса, в клубах играет "колбаса".',
    'ahujenna': 'Ахуенно кого-нибудь убить. Просто взять, тупо в голову выстрелить. И похуй что за это могут посадить, просто похуй на все эти мысли',
    'loliņu': 'ЭТО ВОРОТА АДА ПИЗДЕТЬ УЖЕ НЕ НАДО',
    'rīt': 'КЕНТЫ ЕДУТ НА ХАТУ К ТЕХНИКУ ПОД СОЛИ И МИКСЫ А ТЫ И ДАЛЬШЕ ХУЙ СОСИ',
    'Imants': 'ГОНДОН ТЫ ЗЛОЕБУЧИЙ',
    'darām': 'Меня от соли накрыло!',
    'sīdžu': 'Жгучая хуйня'
  };

bot.on('ready', () => {
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers.`);
    bot.user.setActivity(`XANAX`);
});

bot.on('message', (message) => {

    if(responseObject[message.content]) {
        message.channel.send(responseObject[message.content]);
      }
    if (message.author.bot) return;
})

bot.login(process.env.BOT_TOKEN);
