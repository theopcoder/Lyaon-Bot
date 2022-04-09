const { Client, Collection } = require("discord.js");
const client = new Client({ intents: 131071 });
module.exports = client;
const Color = require('color');
const db = require("quick.db");
const path = require("path");
const fs = require("fs");
const ms = require("ms");
const BadWords = require("./BadWords.js");
const System = require("./System.js");
const token = require("./Token.js");

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('Torturing Humans', { type: 'STREAMING'});
  });

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.login(key);
