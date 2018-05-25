const version = require('../data/version.json');
exports.run = async(bot) => {
const Discord = require('discord.js');

bot.channels.get(process.env.LOG_CHANNALE).send(`
============================================

█──█──███──█──█──████
██─█──█────█─█───█──█
█─██──███──██────█──█
█──█──█────█─█───█──█
█──█──███──█──█──████

============================================
**Лог**: Функция **ready** - Бот Заходит на **${bot.user.username}  [ID ${bot.user.id}]**!
**Лог**: Функция **ready** - Играет на **${bot.guilds.size} Серверах**!
**${bot.channels.size}** Каналах и для **${bot.users.size}** Пользователей Подщитано!
**Лог**: Функция **ready** - Присвоена игра **Система Защиты Сервера**
**Лог**: Функция **ready** - Автор Бота = **${version.BotAutor}**
Версия Бота = **${version.BotVersion}**
============================================`)
bot.channels.get(process.env.BOT_INFO_LOG_CHANNALE).send({
	embed: {
		color: 0xe20808,
		title: "я Перезагрузилась",
		author: {
			name: bot.user.username,
			icon_url: bot.user.avatarURL
		}
		,
		fields: [
			{
				name: "Guilds",
				value: bot.guilds.size
				, inline: true
			},
			{
				name: "Users",
				value: bot.users.filter(g => g.bot).size, inline: true
			},
			{
				name: "Bot Autor",
				value: version.BotAutor, inline: true
			}, {
				name: "Bot Version",
				value: version.BotVersion, inline: true
			},

			{
				name: "Ram used",
				value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`, inline: true
			},
			{
				name: "Version info",
				value: "**Node**: " + process.version, inline: true

			}
		],
		timestamp: new Date(),
	}

}).catch(e => console.warn('wew tf happened here ' + e));
bot.user.setGame("Система Защиты Сервера")
console.log('===================================================')
console.log(`
♥♥──♥♥─♥♥♥♥♥──♥♥──♥♥──♥♥♥♥
♥♥♥─♥♥─♥♥─────♥♥─♥♥──♥♥──♥♥
♥♥─♥♥♥─♥♥♥♥───♥♥♥♥───♥♥──♥♥
♥♥──♥♥─♥♥─────♥♥─♥♥──♥♥──♥♥
♥♥──♥♥─♥♥♥♥♥──♥♥──♥♥──♥♥♥♥
`)
console.log('===================================================')
console.log(`
█───████─████─████──███─█──█─████─███
█───█──█─█──█─█──██──█──██─█─█────█
█───█──█─████─█──██──█──█─██─█─██─███
█───█──█─█──█─█──██──█──█──█─█──█───█
███─████─█──█─████──███─█──█─████─███
`)
console.log('===================================================')
console.log(`Бот Заходит на ${bot.user.username} [ID ${bot.user.id}]!`)
console.log(`Играет на ${bot.guilds.size} Серверах!`)
console.log(`${bot.channels.size} Каналах и для ${bot.users.size} Пользователей Подщитано!`)
console.log('Присвоена игра Система Защиты Сервера')
console.log(`Автор Бота = ${version.BotAutor}`)
console.log(`Версия Бота = ${version.BotVersion}`)
console.log('===================================================');
}