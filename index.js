const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'NzQzMjQ3MjExMTY0NDY3Mjky.XzR46A.qx0LXgexWLnYyp2DOaxi2J737E4';

bot.login(token)

bot.on('ready', () => {
	console.log('estou pronto')
})

bot.on('message', msg =>{
	if(msg.content === 'Teste bot Taverna'){
		msg.reply('Olá! Funcionei e estou sendo testado na taverna destino!')
	}
})