exports.run = async(bot) => {
	console.log('бот Перезагружается!')
	bot.channels.find("id", process.env.LOG_CHANNALE).send(`**Лог**: Функция **reconnecting** - бот Перезагружается!`)
	bot.channels.find("id", process.env.LOG_CHANNALE).send(`-------------------------------------------------------------------`)
}