const { Client, Message, MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const allIntents = new Intents(32767);
const client = new Discord.Client({ intents: allIntents });
const fs = require('fs');
module.exports = {
  name: "afk",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run(message, args) {
    console.log("hi")
    message.reply('This is a reply!')
  .then(() => console.log(`Replied to message ${message.content}`))
  .catch(console.error);
  }
};