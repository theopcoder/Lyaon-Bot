const Discord = require('discord.js');
const token = require("./Token.js");
const { Client, Intents } = require('discord.js');
const allIntents = new Intents(32767);
const client = new Discord.Client({ intents: allIntents });


client.once('ready', () => {
    console.log('Ready to Roll!');
});

client.login(key);