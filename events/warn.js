exports.run = async(bot, error) => {
	console.warn
	bot.channels.find("id", process.env.LOG_CHANNALE).send(`**Лог**: **warn** - ${warn}
	-------------------------------------------------------------------`)
}