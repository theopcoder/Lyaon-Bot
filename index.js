const Discord = require('discord.js');
const fs = require('fs')
const prefix = '?';
const client = new Discord.Client(32767);
const allIntents = Discord.Intents.all();
const bot = new Discord.Client({ intents: Discord.Intents.ALL });
 
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