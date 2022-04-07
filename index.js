const Discord = require('discord.js');
const token = require("./Token.js");
const { Client, Intents } = require('discord.js');
const allIntents = new Intents(32767);
const client = new Discord.Client({ intents: allIntents });
const fs = require('fs');

const prefix = '?';
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('Torturing Lyaon', { type: 'STREAMING'});
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
});
 
client.login(key);