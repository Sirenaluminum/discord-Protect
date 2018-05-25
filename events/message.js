exports.run = async(bot, message) => {
    const Discord = require('discord.js');

    if (message.author.bot) return undefined;
	if (!(message.content.startsWith(process.env.PREFIX) || message.content.startsWith(process.env.PREFIXADM))) return;
	
    const sender = message.author;
	const args = message.content.split(' ');
	const cmd = args[1];


    try{
        let commandFile = require(`../commands/${cmd}.js`);
        commandFile.run(bot, message, args);
    } catch(e) {
        console.log(e.message);
        bot.channels.find("id", process.env.LOG_CHANNALE).send(`**Лог**: **error** - ${e.message}
        -------------------------------------------------------------------`);
    } finally {
        console.log(`${message.author.username} Загрузил Команду: ${cmd}`);
        bot.channels.find("id", process.env.LOG_CHANNALE).send(`**Лог**: **run cmd** - **${message.author.username}** Загрузил Команду: **${cmd}**
        -------------------------------------------------------------------`);
	}
}