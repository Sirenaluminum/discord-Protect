exports.run = async(bot, member) => {
    const Discord = require('discord.js');
    const newUsers = [];	
	let botuser;
	if (member.user.bot === true) botuser = 'Да'
	else botuser = 'Нет'
	let role = member.guild.roles.find("name", "no-name");
	member.addRole(role).catch(console.error);
// Send the message to a designated channel on a server:
	const channel = member.guild.channels.find('name', 'no-name-t');
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
channel.send(`Здравствуйте, **${member}** вы Попали на Сервер оснащённый Защитой **Neko(protector)** начается проверка ваших Данных`, {embed: {
color: 16713430,
author: {
name: member.guild.name,
icon_url: member.guild.iconURL
},
thumbnail: {
url: member.user.displayAvatarURL
},
fields: [ {
name: `Добро Пожаловать на Сервер: ${member.guild.name}`,
value: `Новый Ползоватеь **${member.user.username}**
**Информация Сервера**
**Теперь на Сервере:**  ${member.guild.memberCount} Позователей`
},
{
name: `Информация о Пользователе`,
value: `Новый Пользователь **${member.user.username}**
**${member.user.username} ID:**  ${member.user.id}
**Имя Нового Пользователя:**  ${member.user.tag}
**Пользователь Бот:**  ${botuser}`,
inline: true
}]
}});
    // Create an event listener for new guild members
}
