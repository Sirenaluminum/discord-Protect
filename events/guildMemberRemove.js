exports.run = async(bot, member) => {
    const Discord = require('discord.js');	
	let botuser;
	if (member.user.bot === true) botuser = 'Да'
	else botuser = 'Нет'
	const channel = member.guild.channels.find('name', 'no-name-t');
	if (!channel) return;
    channel.send(`Внимание!, **${member.user}** Покинул Сервер `, {embed: {
color: 16713430,
author: {
name: member.guild.name,
icon_url: member.guild.iconURL
},
thumbnail: {
url: member.user.displayAvatarURL
},
fields: [ {
name: `${member.user.username} Покинул Сервер:  ${member.guild.name}`,
value: `Бывшый Пользователь **${member.user.username}**
**Информация Сервера**
**Теперь на Сервере:**  ${member.guild.memberCount} Позователей`
},
{
name: `Информация о Пользователе`,
value: `Бывшый Пользователь **${member.user.username}**
**${member.user.username} ID:**  ${member.user.id}
**Имя Бывшего Пользователя:**  ${member.user.tag}
**Пользователь Бот:**  ${botuser}`,
inline: true
}]
}});
}