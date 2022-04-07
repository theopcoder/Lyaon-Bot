const { client, Intents } = require('discord.js');
const allIntents = new Intents(32767);
const Discord = require('discord.js');
const fs = require('fs')
const prefix = '?';
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/bot').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/bot/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('Torturing Lyaon', { type: 'STREAMING'});
});
 
client.on("messageCreate", message => { //Changed message to messageCreate
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    };
});
 
client.login(key);