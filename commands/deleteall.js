const { ReactionCollector } = require("discord.js-collector");
const Enmap = require("enmap");
const myEnmap = require("./myEnmap.js");
const jsonfile = require("jsonfile");
const file = "./questions.json";
const fs = require("fs");
const botSettings = require("../config.json");
const prefix = botSettings.prefix;
const editJsonFile = require("edit-json-file");
let file2 = editJsonFile(`./questions.json`);
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "deleteall",
  description: "Deletes a FAQ Q&A",
  execute(message, args) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
      myEnmap.faqs.fetchAll;
      myEnmap.faqs.deleteAll();
      message.reply("deleted all faqs");
    } else {
      message.reply("Whoops! Looks like you aren't an admin.");
    }
  },
};
