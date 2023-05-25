const client = require('../../index');
const fs = require('fs');
module.exports = {
    name: "guildCreate"
};

client.on('guildCreate', guild => {
    // Add the guildId and guildName to the guild.json file
    fs.readFile(`./src/guild.json`, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
  
      let guildData = JSON.parse(data);
      guildData[guild.id] = guild.name;
  
      fs.writeFile(`./src/guild.json`, JSON.stringify(guildData, null, 2), err => {
        if (err) {
          console.error(err);
          return;
        }
  
        console.log(`Added guildId ${guild.id} and guildName ${guild.name} to the guild.json file.`);
      });
    });
  });