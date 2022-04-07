const Discord = require('discord.js');
const token = require("./Token.js");
const { Client, Intents } = require('discord.js');
const allIntents = new Intents(32767);
const client = new Discord.Client({ intents: allIntents });
const fs = require('fs')

client.on('ready', () => {
    console.log(`Bot is online!`);
  client.user.setActivity('Lyaon Suffer', { type: 'WATCHING'});
});

// Command Handler
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
  	console.log(`Bot is online!`);
    client.user.setActivity('Lyaon Suffer', { type: 'WATCHING'});
});
client.on('messageCreate', async message => {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase()

    if (command == 'help') {
        client.commands.get('help').execute(message)
    }
})

client.login(key);
