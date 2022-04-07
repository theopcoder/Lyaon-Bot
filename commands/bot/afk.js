const { Client, Message, MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const token = require("./Token.js");
const { Client, Intents } = require('discord.js');
const allIntents = new Intents(32767);
const client = new Discord.Client({ intents: allIntents });
const fs = require('fs');
module.exports = {
  name: "say",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run(message, args) {
    message.reply("Is now AFK.");
    }
};