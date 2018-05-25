exports.run = async(bot, error) => {
 console.error
 bot.channels.find("id", process.env.LOG_CHANNALE).send(`**Лог**: **error** - ${error}
 -------------------------------------------------------------------`)
}